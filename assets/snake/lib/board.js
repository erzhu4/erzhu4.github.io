import Snake from './snake.js';

class Board {

	constructor() {
		this.snake = new Snake();
		this.apple = null;
	}

	generateApple() {
		if (this.snake.segments.indexOf(this.apple) !== -1) {
			this.apple = null;
		}
		if (this.apple === null) {
			var newApple = Math.floor(Math.random() * 625);
			while (this.snake.segments.indexOf(newApple) !== -1) {
				newApple = Math.floor(Math.random() * 625);
			}
			this.apple = newApple;
		}
	}
}

export default Board;
