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
var men = [];
var seeds = [];

$(document).ready(function() {
	createWorld();

	setInterval(update, GAME_SPEED);
});

function update() {

	men.forEach(function(man) {
		man.move();
	});

	for(var i = 0; i < seeds.length; i++) {
		for(var j = 0; j < men.length; j++) {
			if(seeds[i].x == men[j].x && seeds[i].y == men[j].y) {
				seeds.splice(i, 1);
				spawnNewSeed();

				men.forEach(function(man) {
					man.find = true;
				});

				break;
			}
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