var FIELD_LENGTH = 1200;
var FIELD_HEIGHT = 720;
var CELL_SIZE = 40;

var USUAL_FIELD_COST = 20;
var SWAMP_FIELD_COST = 50;

var SWAMPS_AMOUNT = 270;
var SEEDS_AMOUNT = 10;

var GAME_SPEED = 5;

var canvas;
var ctx;
var field = [];
var swamps = [];
var man;
var seeds = [];

$(document).ready(function() {
	createWorld();

	setInterval(update, GAME_SPEED);
});

function update() {

	man.move();

	for(var i = 0; i < seeds.length; i++) {
		if(seeds[i].x == man.x && seeds[i].y == man.y) {
			seeds.splice(i, 1);
			spawnNewSeed();
			man.findPath(seeds);
			break;
		}
	};

	render();
}

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i].x == obj.x && this[i].y == obj.y) {
            return true;
        }
    }
    return false;
}