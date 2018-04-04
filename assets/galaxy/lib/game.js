import Enemy from './enemy.js';
import BigEnemy from './bigenemy.js';
import Bullet from './bullet.js';
import Ship from './ship.js';
import Explosion from './explosion.js';
import BigExplosion from './bigexplosion.js';
import Spark from './spark.js';
import Puff from './puff.js';

class GalaxyGame {

  constructor(color, x, y, fps) {
    this.Galaxy = [];
    this.bullets = [];
    this.ships = [];
  	this.explosions = [];
    this.bigExplosions = [];
    this.sparks = [];
    this.puffs = [];
  	this.bigEnemies = [];
    this.numEnemies = 10;
    this.space = new Image();
    this.space.src = window.BasePath + "images/stars.jpg";

    this.BG_COLOR = color;
    this.DIM_X = x;
    this.DIM_Y = y;
    this.FPS = fps;
  }


  add(object) {
    if (object instanceof Enemy) {
      this.Galaxy.push(object);
    } else if (object instanceof Bullet) {
      this.bullets.push(object);
    } else if (object instanceof Ship) {
      this.ships.push(object);
    } else {
      throw "um";
    }
  }

  addEnemies() {
    for (var i = 0; i < this.numEnemies; i++) {
      this.add(new Enemy({ game: this, x_dem: this.DIM_X }));
    }
  }

  addBigEnemy() {
    if (this.bigEnemies.length > 3){
      this.bigEnemies.shift(1);
    }
	  this.bigEnemies.push(new BigEnemy( {game: this, x_dem: this.DIM_X} ));
  }

  addShip() {
    var ship = new Ship({
      pos: [this.DIM_X/2, -550],
      game: this
    });

    this.ships.push(ship);
    return ship;
  }

  addExplosion(pos) {
  	if (this.explosions.length > 10){
  		this.explosions.shift(1);
  	}
  	this.explosions.push(new Explosion(pos, this))
  }

  addBigExplosion(pos) {
    if (this.bigExplosions.length > 2){
      this.bigExplosions.shift(1);
    }
    this.bigExplosions.push(new BigExplosion(pos, this))
  }

  addSpark(pos) {
    if (this.sparks.length > 8){
      this.sparks.shift(1);
    }
    this.sparks.push(new Spark(pos, this));
  }

  addPuff(pos) {
    if (this.puffs.length > 8){
      this.puffs.shift(1);
    }
    this.puffs.push(new Puff(pos, this));
  }

  allObjects() {
    return [].concat(this.ships, this.Galaxy, this.bullets, this.explosions, this.bigEnemies, this.sparks, this.bigExplosions, this.puffs);
  }

  checkCollisions() {
    var game = this;

    this.allObjects().forEach(function (obj1) {
      game.allObjects().forEach(function (obj2) {
        if (obj1 == obj2) {
          return;
        }
        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      });
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = this.BG_COLOR;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.drawImage(this.space, 0, 0, this.DIM_X, this.DIM_Y)
    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > this.DIM_X) || (pos[1] > this.DIM_Y);
  }

  moveObjects() {
    if(this.ships[0]){
      if (this.ships[0].pos[0] > this.DIM_X - 20) {
        this.ships[0].vel = [0,0];
        this.ships[0].pos[0] -= 1;
      }
      if (this.ships[0].pos[0] < 20) {
        this.ships[0].vel = [0,0];
        this.ships[0].pos[0] += 1;
      }
      this.allObjects().forEach(function(object) {
        object.move();
      });
    }
  }



  remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Enemy) {
      var idx = this.Galaxy.indexOf(object);
      this.Galaxy[idx] = new Enemy({ game: this, x_dem: this.DIM_X });
    } else if (object instanceof Ship) {
      this.ships.splice(this.ships.indexOf(object), 1);
    } else if (object instanceof BigEnemy) {
      this.bigEnemies.splice(this.bigEnemies.indexOf(object), 1);
    } else if (object instanceof Explosion) {
      this.explosions.splice(this.explosions.indexOf(object), 1);
    } else if (object instanceof BigExplosion) {
      this.bigExplosions.splice(this.bigExplosions.indexOf(object), 1);
    } else if (object instanceof Spark) {
      this.sparks.splice(this.sparks.indexOf(object), 1);
    } else if (object instanceof Puff) {
      this.puffs.splice(this.puffs.indexOf(object), 1);
    } else {
      throw "um";
    }
  }

  step() {
    this.moveObjects();
    this.checkCollisions();
  }

  wrap(pos) {
    return [
      wrap(pos[0], this.DIM_X), wrap(pos[1], this.DIM_Y)
    ];

    function wrap(coord, max) {
      if (coord < 0) {
        return max - (coord % max);
      } else if (coord > max) {
        return coord % max;
      } else {
        return coord;
      }
    }
  }
}

export default GalaxyGame;
