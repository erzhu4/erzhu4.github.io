import Utils from './util.js';

class MovingObject {

  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.dem = options.dem;
    this.sprite = options.sprite;
    this.utils = new Utils();
    this.isWrappable = true;
  }

  collideWith(otherObject) {
    ;
  };

  draw(ctx) {
    ctx.drawImage(this.sprite, this.pos[0] - this.dem /2, this.pos[1] - this.dem / 2, this.dem, this.dem);
  }

  isCollidedWith(otherObject) {
    var centerDist = this.utils.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  move() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  }

  remove() {
    this.game.remove(this);
  }
}

export default MovingObject;
