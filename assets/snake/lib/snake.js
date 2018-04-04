class Snake {
	
	constructor() {
		this.dir = 'N';
		this.segments = [312, 337, 362];
	}

	move(apple) {
		var newSpace = this.testMove();
		this.segments.unshift(newSpace);
		if (newSpace !== apple) {
			this.segments.pop();
		}
		this.canTurn = true;
	}

	hitEdge() {
		if (this.dir === 'N' && this.segments[0] < 25) {
			return true;
		} else if (this.dir === 'S' && this.segments[0] > 599) {
			return true;
		} else if (this.dir === 'W' && this.segments[0] % 25 === 0) {
			return true;
		} else if (this.dir === 'E' && this.segments[0] % 25 === 24) {
			return true;
		}

		return false;
	}

	hitSelf() {
		return this.segments.indexOf(this.testMove()) !== -1;
	}

	testMove() {
		var newSpace = null;
		if (this.dir === 'N') {
			newSpace = this.segments[0] - 25;
		} else if (this.dir === 'S') {
			newSpace = this.segments[0] + 25;
		} else if (this.dir === 'W') {
			newSpace = this.segments[0] - 1;
		} else if (this.dir === 'E') {
			newSpace = this.segments[0] + 1;
		}
		return newSpace;
	};

	turn(dir) {
		var northSouth = ['N', 'S'];
		var eastWest = ['E', 'W'];
		if (
			!(northSouth.indexOf(this.dir) !== -1 && northSouth.indexOf(dir) !== -1) && !(eastWest.indexOf(this.dir) !== -1 && eastWest.indexOf(dir) !== -1) &&
			this.canTurn
		) {
			this.canTurn = false;
			this.dir = dir;
			var snake = this;
			window.setTimeout(function () {
				snake.canTurn = true;
			}, 100);
		}
	}
}

export default Snake;
