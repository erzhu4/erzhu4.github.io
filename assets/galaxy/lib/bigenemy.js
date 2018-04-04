import MovingObject from './movingObject.js';
import Ship from './ship.js';

class BigEnemy extends MovingObject{

  constructor(options) {
    var sprite = new Image();
    sprite.src = window.BasePath + "images/battlecruiser.png";
    options.pos = [50 + Math.random() * 0.75 * options.x_dem, 1];
    options.radius = 100;
    options.vel = [0, 2];
    options.dem = 250;
    options.sprite = sprite;
    super(options);
    this.hp = 20;
  }


  move() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

    if (this.hp < 1){
      this.game.addBigExplosion(this.pos);
      this.game.remove(this);
    }
    if (this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
  }

  collideWith(otherObject) {
    if (otherObject instanceof Ship) {
      window.eventBus.$emit('galaxyLose');
      this.game.remove(otherObject);
    }
  }

 }

 export default BigEnemy;
