(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.timerId = null;
  };

  GameView.MOVES = {
    "a": [-1,  0],
    "d": [ 1,  0]
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.ship;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { ship.power(move); });
    });

    key("p", function () { ship.fireBullet(); });
  };

  GameView.prototype.start = function () {
    $(".galaxy-game-over").addClass("hide");
    this.game = new Asteroids.Game();
    this.ship = this.game.addShip();
    var gameView = this;
    this.stop();
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 1000 / Asteroids.Game.FPS
    );

    this.bindKeyHandlers();
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
