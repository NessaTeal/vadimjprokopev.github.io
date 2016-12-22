function render() {
	canvas.width = canvas.width;
	
	drawSwamps();
	drawSeeds();
	drawMan();
}

function drawMan() {
	var x = man.x * CELL_SIZE;
	var y = man.y * CELL_SIZE;

	ctx.fillStyle = "#FACE8D";

	ctx.fillRect(x + 5, y + 5, CELL_SIZE - 10, CELL_SIZE - 10);
}

function drawSeeds() {
	seeds.forEach(function(seed) {
		var x = seed.x * CELL_SIZE;
		var y = seed.y * CELL_SIZE;

		ctx.fillStyle = "#00CC00";

		ctx.fillRect(x + 5, y + 5, CELL_SIZE - 10, CELL_SIZE - 10);
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