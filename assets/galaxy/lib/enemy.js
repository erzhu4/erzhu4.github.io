import MovingObject from './movingObject.js';
import Ship from './ship.js';

class Enemy extends MovingObject{

  constructor(options) {
    var sprite = new Image();
    sprite.src = [window.BasePath + "images/enemy.gif", window.BasePath + "images/enemy2.png"][Math.floor(Math.random() * 2)];
    options.color = "#009999";
    options.pos = options.pos || [Math.random() * options.x_dem, 1];
    options.radius = 30;
    options.vel = options.vel || [0, (Math.random() * 4) + 1];
    options.dem = 60;
    options.sprite = sprite;
    super(options);
    this.isWrappable = false;
  }


  collideWith(otherObject) {
    if (otherObject instanceof Ship) {
      window.eventBus.$emit('galaxyLose');
      this.game.remove(otherObject);
    }
  }
  
}

export default Enemy;