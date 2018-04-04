import ExpandingObject from './expandingObject.js';

class Explosion extends ExpandingObject{

	constructor(pos, game) {
		var options = {};
		options.pos = pos;
		options.game = game;

		var sprite = new Image();
		sprite.src = window.BasePath + "images/explosion.png";

		options.sprite = sprite;
		options.dem = 20;
    	super(options);
	}

	move() {
		if (this.dem > 120) {
			this.game.remove(this);
		} else {
			this.dem += 20;
			this.pos[0] -= 10;
			this.pos[1] -= 10;
		}
	}


 }

 export default Explosion;
