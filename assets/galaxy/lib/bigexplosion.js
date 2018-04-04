import ExpandingObject from './expandingObject.js';

class BigExplosion extends ExpandingObject{

	constructor(pos, game){
		var options = {};
		options.pos = pos;
		options.game = game;

		var sprite = new Image();
		sprite.src = window.BasePath + "images/bigexplosion.gif";

		options.sprite = sprite;
		options.dem = 80;
    	super(options);
	}

	move(){
		if (this.dem > 640) {
			this.game.remove(this);
		} else {
			this.dem += 60;
			this.pos[0] -= 30;
			this.pos[1] -= 30;
		}
	}

 }

 export default BigExplosion;
