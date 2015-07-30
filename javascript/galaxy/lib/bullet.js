(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var Bullet = Galaxy.Bullet = function (options) {
    this.game = options.game;
    var sprite = new Image();
    sprite.src = "./images/missile.png";
    options.radius = Bullet.RADIUS;
    options.sprite = sprite;
    options.dem = 15;
    Galaxy.MovingObject.call(this, options);
  };

  Bullet.RADIUS = 2;
  Bullet.SPEED = 25;

  Galaxy.Util.inherits(Bullet, Galaxy.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Galaxy.Enemy) {
      this.game.addExplosion(this.pos);	
      this.remove();
      otherObject.remove();
      $(".galaxy-score").html(parseInt($(".galaxy-score").html()) + 1);
    }
  };

  Bullet.prototype.isWrappable = false;
})();
