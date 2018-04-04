import GalaxyGame from './game.js';
import GalaxyView from './gameView.js';

class Galaxy {
	
	constructor(canvasElement){
		this.BG_COLOR = "#000000";
		this.DIM_X = 600;
		this.DIM_Y = 600;
		this.FPS = 32;
		this.view = new GalaxyView(
			canvasElement,
			this.BG_COLOR,
			this.DIM_X,
			this.DIM_Y,
			this.FPS
		);
	}

	startGame(){
		this.view.start();
	}

}

export default Galaxy;