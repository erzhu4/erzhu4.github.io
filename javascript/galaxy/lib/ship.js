(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (options) {
    var sprite = new Image();
    sprite.src = "./images/ship.gif";
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = "#999999"
    options.dem = 30;
    options.sprite = sprite;
    Asteroids.MovingObject.call(this, options);
  };

  Ship.RADIUS = 20;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.fireBullet = function () {
    var bulletVel = [0, -25];
    var bullet = new Asteroids.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };

  Ship.prototype.power = function (impulse) {
    var ship = this;
    this.vel[0] = impulse[0] * 4;
  };

})();
