import ExpandingObject from './expandingObject.js';

class Spark extends ExpandingObject{

	constructor(pos, game) {
		var options = {};
		options.pos = pos;
		options.game = game;

		var sprite = new Image();
		sprite.src = window.BasePath + "images/spark.png";

		options.sprite = sprite;

		options.dem = 10;
    	super(options);
	}

	move() {
		if (this.dem > 60) {
			this.game.remove(this);
		} else {
			this.dem += 20;
			this.pos[0] -= 5;
			this.pos[1] -= 5;
		}
	}

 }

export default Spark;