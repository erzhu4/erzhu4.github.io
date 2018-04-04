import Enemy from './enemy.js';
import BigEnemy from './bigenemy.js';
import MovingObject from './movingObject.js';

class Bullet extends MovingObject {

  constructor(options) {
    var sprite = new Image();
    sprite.src = window.BasePath + "images/bullet.png";
    options.radius = 2;
    options.sprite = sprite;
    options.dem = 45;
    super(options);
    this.isWrappable = false;
  }

  collideWith(otherObject) {
    this.game.addSpark(this.pos);
    if (otherObject instanceof Enemy) {
	    this.game.addExplosion(this.pos);
      this.remove();
      otherObject.remove();
      $(".galaxy-score").html(parseInt($(".galaxy-score").html()) + 1);
      if (parseInt($(".galaxy-score").html()) % 50 === 0) {
        this.game.addEnemies();
        this.game.addBigEnemy();
      }
    }

  	if (otherObject instanceof BigEnemy){
  		otherObject.hp -= 1;
  		this.remove();
  	}
  }

  draw(ctx) {
    ctx.drawImage(this.sprite, this.pos[0] - this.dem / 8, this.pos[1] - this.dem, this.dem / 4, this.dem);
  }

}

export default Bullet;
