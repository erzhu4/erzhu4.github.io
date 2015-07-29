(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (options) {
    var sprite = new Image();
    sprite.src = "./images/missile.png";
    options.radius = Bullet.RADIUS;
    options.sprite = sprite;
    options.dem = 15;
    Asteroids.MovingObject.call(this, options);
  };

  Bullet.RADIUS = 2;
  Bullet.SPEED = 25;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.remove();
      otherObject.remove();
    }
  };

  Bullet.prototype.isWrappable = false;
})();
