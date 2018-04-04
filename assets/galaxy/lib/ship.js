import Bullet from './bullet.js';
import MovingObject from './movingObject.js';

class Ship extends MovingObject{

  constructor(options) {
    var sprite = new Image();
    sprite.src = window.BasePath + "images/ship.gif";
    options.radius = 30;
    options.vel = options.vel || [0, 0];
    options.color = "#999999";
    options.dem = 60;
    options.sprite = sprite;
    super(options);
  }


  fireBullet() {
    var bulletVel = [this.vel[0] / 2, -40];
    var bullet1 = new Bullet({
      pos: [this.pos[0] - 20, this.pos[1] - 5],
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    var bullet2 = new Bullet({
      pos: [this.pos[0] + 20, this.pos[1] - 5],
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet1);
    this.game.add(bullet2);
    this.game.addPuff([this.pos[0] - 24 + this.vel[0], this.pos[1] - 40]);
    this.game.addPuff([this.pos[0] + 16 + this.vel[0], this.pos[1] - 40]);
  }

  slowDown() {
    this.vel[0] = 0;
  }

  power(impulse) {
    this.vel[0] = impulse[0] * 8;
  }

}

export default Ship;
