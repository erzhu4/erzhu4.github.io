class SnakeView {

	constructor(board, $el) {
		this.board = board;
		this.$game = $el;
		this.$game.find('.snake-grid').remove();
		this.setup();
		this.bindKeys();
		this.interval = window.setInterval(this.step.bind(this), 100);
	}

	setup() {
		this.$game.append("<ul class='snake-grid'>");
		for (var i = 0; i < 625; i++) {
			this.$game.find('.snake-grid').append("<li class='snake-li'></li>");
		}
		var $game = this.$game;
		this.board.snake.segments.forEach(function (element) {
			$($game.find('.snake-li')[element]).addClass("snake");
		});
	}

	bindKeys() {
		$(document).on("keydown", function (event) {
			event.preventDefault();
			if (event.keyCode === 38) {
				this.board.snake.turn('N');
			}
			if (event.keyCode === 37) {
				this.board.snake.turn('W');
			}
			if (event.keyCode === 39) {
				this.board.snake.turn('E');
			}
			if (event.keyCode === 40) {
				this.board.snake.turn('S');
			}
		}.bind(this));
	}

	step() {
		if (this.board.snake.hitSelf() || this.board.snake.hitEdge()) {
			this.gameOver();
		} else {
			this.board.generateApple();
			this.board.snake.move(this.board.apple);
			this.draw();
		}
	}

	gameOver() {
		window.clearInterval(this.interval);
		window.eventBus.$emit('snakeLose');
	}

	draw() {
		this.$game.find('.snake').removeClass("snake");
		this.$game.find('.apple').removeClass("apple");
		var view = this;
		this.board.snake.segments.forEach(function (element) {
			$(view.$game.find('.snake-li')[element]).addClass("snake");
		});
		$(this.$game.find('.snake-li')[this.board.apple]).addClass("apple");
	}
}

export default SnakeView;
