function createWorld() {
	for(var x = 0; x < FIELD_LENGTH / CELL_SIZE; x++) {
		field[x] = [];
		for(var y = 0; y < FIELD_HEIGHT / CELL_SIZE; y++) {
			field[x][y] = {x:x, y:y, cost:USUAL_FIELD_COST};
		}
	}

	man = new man(1, 1);

	for(var i = 0; i < SEEDS_AMOUNT; i++) {
		spawnNewSeed();
	}

	spawnSwamps();

	canvas = document.getElementById("canvas");
	canvas.width = FIELD_LENGTH;
	canvas.height = FIELD_HEIGHT;

	ctx = canvas.getContext("2d");

	man.findPath(seeds);
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

		field[swamp.x][swamp.y].cost = SWAMP_FIELD_COST;
	}
}