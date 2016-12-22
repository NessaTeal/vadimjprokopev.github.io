var canvas;
var ctx;

var field = [];

var FIELD_LENGTH = 1200;
var FIELD_HEIGHT = 720;
var CELL_SIZE = 40;
var SWAMPS_AMOUNT = 500;
var GAME_SPEED = 200;

var swamps = [];

var man;

var seeds = [];

$(document).ready(function() {
	for(var x = 0; x < FIELD_LENGTH / CELL_SIZE; x++) {
		field[x] = [];
		for(var y = 0; y < FIELD_HEIGHT / CELL_SIZE; y++) {
			field[x][y] = {x:x, y:y, cost:1};
		}
	}

	man = new man(1, 1);

	for(var i = 0; i < 10; i++) {
		spawnNewSeed();
	}

	spawnSwamps();

	canvas = document.getElementById("canvas");
	canvas.width = FIELD_LENGTH;
	canvas.height = FIELD_HEIGHT;

	ctx = canvas.getContext("2d");

	man.findPath(seeds);

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

	canvas.width = canvas.width;

	drawSwamps();
	drawSeeds();
	drawMan();
}

function drawMan() {
	var x = man.x * CELL_SIZE;
	var y = man.y * CELL_SIZE;

	ctx.fillStyle = "#FACE8D";

	ctx.fillRect(x,y,CELL_SIZE,CELL_SIZE);
}

function drawSeeds() {
	seeds.forEach(function(seed) {
		var x = seed.x * CELL_SIZE;
		var y = seed.y * CELL_SIZE;

		ctx.fillStyle = "#00CC00";

		ctx.fillRect(x,y,CELL_SIZE,CELL_SIZE);
	});
}

function drawSwamps() {
	swamps.forEach(function(swamp) {
		var x = swamp.x * CELL_SIZE;
		var y = swamp.y * CELL_SIZE;

		ctx.fillStyle = "#0000FF";

		ctx.fillRect(x,y,CELL_SIZE,CELL_SIZE);
	});
}

function spawnNewSeed() {
	var seed = {};
	do {
		seed.x = Math.round(Math.random() * (FIELD_LENGTH / CELL_SIZE - 1));
		seed.y = Math.round(Math.random() * (FIELD_HEIGHT / CELL_SIZE - 1)); 
	} while((seed.x == man.x && seed.y == man.y) || seeds.contains(seed));

	seeds.push(seed);
}

function spawnSwamps() {
	for(var i = 0; i < SWAMPS_AMOUNT; i++) {
		var swamp = {};

		do {
			swamp.x = Math.round(Math.random() * (FIELD_LENGTH / CELL_SIZE - 1));
			swamp.y = Math.round(Math.random() * (FIELD_HEIGHT / CELL_SIZE - 1));
		} while(swamps.contains(swamp));

		swamps.push(swamp);

		field[swamp.x][swamp.y].cost = 10;
	}
}

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}