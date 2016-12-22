function man(x,y) {
	this.x = x;
	this.y = y;
	this.lastx = 0;
	this.lasty = 0;
	this.stepsRemaining = 0;
	this.path = [];
	this.moving = false;
	this.destination = {};
	this.findPath = function findPath(targets) {

		var globalMinimumDistance = Number.MAX_SAFE_INTEGER;

		for(var k = 0; k < targets.length; k++) {
			var unvisited = $.extend(true, [], field);

			unvisited[this.x][this.y].distance = 0;

			var current = unvisited[this.x][this.y];

			while(current.x != targets[k].x || current.y != targets[k].y) {

				if(current.y < FIELD_HEIGHT / CELL_SIZE - 1
					&& (unvisited[current.x][current.y + 1].distance === undefined
					|| unvisited[current.x][current.y + 1].distance > current.distance + unvisited[current.x][current.y + 1].cost)) {

					unvisited[current.x][current.y + 1].distance = current.distance + unvisited[current.x][current.y + 1].cost;
					unvisited[current.x][current.y + 1].previous = current;
				};

				if(current.y != 0
					&& (unvisited[current.x][current.y - 1].distance === undefined
					|| unvisited[current.x][current.y - 1].distance > current.distance + unvisited[current.x][current.y - 1].cost)) {

					unvisited[current.x][current.y - 1].distance = current.distance + unvisited[current.x][current.y - 1].cost;
					unvisited[current.x][current.y - 1].previous = current;
				};

				if(current.x < FIELD_LENGTH / CELL_SIZE - 1
					&& (unvisited[current.x + 1][current.y].distance === undefined
					|| unvisited[current.x + 1][current.y].distance > current.distance + unvisited[current.x + 1][current.y].cost)) {

					unvisited[current.x + 1][current.y].distance = current.distance + unvisited[current.x + 1][current.y].cost;
					unvisited[current.x + 1][current.y].previous = current;
				};

				if(current.x != 0
					&& (unvisited[current.x - 1][current.y].distance === undefined
					|| unvisited[current.x - 1][current.y].distance > current.distance + unvisited[current.x - 1][current.y].cost)) {

					unvisited[current.x - 1][current.y].distance = current.distance + unvisited[current.x - 1	][current.y].cost;
					unvisited[current.x - 1][current.y].previous = current;
				};

				current.visited = true;

				var newCur;
				var smallestDist = Number.MAX_SAFE_INTEGER;

				for(var i = 0; i < FIELD_LENGTH / CELL_SIZE; i++) {
					for(var j = 0; j < FIELD_HEIGHT / CELL_SIZE; j++) {
						if(unvisited[i][j].visited != true || unvisited[i][j].visited === undefined) {
							if(unvisited[i][j].distance < smallestDist) {
								newCur = unvisited[i][j];
								smallestDist = unvisited[i][j].distance;
							}
						}
					}
				}

				current = newCur;
			}

			var path = [current];

			if(unvisited[targets[k].x][targets[k].y].distance < globalMinimumDistance) {

				globalMinimumDistance = unvisited[targets[k].x][targets[k].y].distance;

				while(current.previous !== undefined) {
					path.unshift(current.previous);
					current = current.previous;
				}

				path.splice(0,1);

				this.path = path;
			}
		};
	}

	this.move = function() {
		if(!this.moving) {
			if(this.path.length != 0) {
				this.destination = this.path[0];
				this.path.splice(0,1);

				this.stepsRemaining = this.destination.cost;

				this.lastx = this.x;
				this.lasty = this.y;

				this.moving = true;
			}
		}

		this.x += (this.destination.x - this.lastx)/this.destination.cost;
		this.y += (this.destination.y - this.lasty)/this.destination.cost;

		this.stepsRemaining--;

		if(this.stepsRemaining == 0) {
			
			this.x = this.destination.x;
			this.y = this.destination.y;

			this.moving = false;
		}

	}
}
