class ExpandingObject {

  constructor(options) {
  	this.dem = options.dem;
  	this.game = options.game;
  	this.pos = options.pos;
  	this.sprite = options.sprite;
  };

  draw(ctx) {
    ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.dem, this.dem);
  }

  isCollidedWith(obj) {
    return false;
  }

}

export default ExpandingObject;
