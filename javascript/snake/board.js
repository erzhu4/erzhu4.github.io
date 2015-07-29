(function () {
	if (typeof SnakeGame === "undefined") {
		window.SnakeGame = {};
	};

var Board = SnakeGame.Board = function(){
	this.snake = new SnakeGame.Snake();
	this.apple = null;
};


Board.prototype.generateApple = function() {
	if (this.snake.segments.indexOf(this.apple) !== -1){
		this.apple = null;
	}
	if (this.apple === null){
		var newApple = Math.floor(Math.random() * 625);
		while (this.snake.segments.indexOf(newApple) !== -1) {
			newApple = Math.floor(Math.random() * 625);
		};
		this.apple = newApple;
	};
};

})();
