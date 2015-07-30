(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var Ship = Galaxy.Ship = function (options) {
    var sprite = new Image();
    sprite.src = "./images/ship.gif";
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = "#999999";
    options.dem = 50;
    options.sprite = sprite;

    Galaxy.MovingObject.call(this, options);
  };

  Ship.RADIUS = 20;

  Galaxy.Util.inherits(Ship, Galaxy.MovingObject);

  Ship.prototype.fireBullet = function () {
    var bulletVel = [0, -25];
    var bullet1 = new Galaxy.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    var bullet2 = new Galaxy.Bullet({
      pos: [this.pos[0] + 35, this.pos[1]],
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet1);
    this.game.add(bullet2);
  };

  Ship.prototype.slowDown = function () {
    this.vel[0] = 0;
  };


  Ship.prototype.power = function (impulse) {
    var ship = this;
    this.vel[0] = impulse[0] * 8;
  };

})();
