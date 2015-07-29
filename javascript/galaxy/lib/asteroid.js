(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos || [Math.random() * Asteroids.Game.DIM_X, 1];
    options.radius = Asteroid.RADIUS;
    options.vel = options.vel || [0, (Math.random() * 4) + 1];

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#009999";
  Asteroid.RADIUS = 25;
  Asteroid.SPEED = 4;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      $(".galaxy-game-over").removeClass("hide");
      this.game.remove(otherObject);
    }
  };

  Asteroid.prototype.isWrappable = false;
})();