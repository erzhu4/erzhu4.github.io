(function(){
	if (typeof SnakeGame === "undefined"){
		window.SnakeGame = {};
	};

var View = SnakeGame.View = function(board, $el) {
	this.board = board;
	this.$game = $el;
	this.setup();
	this.bindKeys();
};

View.prototype.startGame = function (){
	var view = this;
	this.interval = window.setInterval(view.step.bind(view), 100);
};

View.prototype.setup = function(){
	this.$game.append("<ul class='grid'>");
	for (var i = 0; i < 625; i++){
		this.$game.find('.grid').append("<li></li>");
	};
	var $game = this.$game;
	this.board.snake.segments.forEach(function(element){
		$($game.find('li')[element]).addClass("snake");
	});
};

View.prototype.bindKeys = function() {
	$(document).on("keydown", function(event){
		if (event.keyCode === 87) {
			this.board.snake.turn('N');
		};
		if (event.keyCode === 65) {
			this.board.snake.turn('W');
		}
		if (event.keyCode === 68) {
			this.board.snake.turn('E');
		}
		if (event.keyCode === 83) {
			this.board.snake.turn('S');
		};
	}.bind(this))
}

View.prototype.step = function (){
	if (this.board.snake.hitSelf() || this.board.snake.hitEdge()){
		this.gameOver();
	} else {
		this.board.generateApple();
		this.board.snake.move(this.board.apple);
		this.draw();
	};
};

View.prototype.gameOver = function (){
	window.clearInterval(this.interval);
	$(".snake-game-over").removeClass("hide");
}

View.prototype.draw = function() {
	this.$game.find('.snake').removeClass("snake");
	this.$game.find('.apple').removeClass("apple");
	var view = this;
	this.board.snake.segments.forEach( function(element){
		$(view.$game.find('li')[element]).addClass("snake");
	})
	$(this.$game.find('li')[this.board.apple]).addClass("apple");
};


})();
