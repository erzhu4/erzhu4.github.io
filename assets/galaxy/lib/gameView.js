import GalaxyGame from './game.js';

class GalaxyView {

  constructor(ctx, color, x, y, fps) {
    this.BG_COLOR = color;
    this.DIM_X = x;
    this.DIM_Y = y;
    this.FPS = fps;

    this.ctx = ctx;
    this.timerId = null;
  }

  bindKeyHandlers() {
    var ship = this.ship;
    // a
    $(document).on("keydown", function(event){
      // a
      event.preventDefault();
      if (event.keyCode === 37 || event.keyCode === 65){
        ship.power([-1, 0]);
      }
      //d
      if (event.keyCode === 39 || event.keyCode === 68){
        ship.power([1, 0]);
      }

      if (event.keyCode === 32 || event.keyCode === 80){
        ship.fireBullet();
      }
    });

    $(document).on("keyup", function(event){
      event.preventDefault();
      if (event.keyCode === 37 || event.keyCode === 65){
        if (ship.vel[0] < 0) {
          ship.slowDown();
        }
      }
      if (event.keyCode === 39 || event.keyCode === 68 ){
        if (ship.vel[0] > 0) {
          ship.slowDown();
        }
      }
    });
  }

  start(){
	 $(".galaxy-score").html(0);
    this.game = new GalaxyGame(this.BG_COLOR, this.DIM_X, this.DIM_Y, this.FPS);
    this.ship = this.game.addShip();
    this.game.addEnemies();
    var gameView = this;
    this.stop();
    this.timerId = setInterval(
      function(){
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 1000 / this.game.FPS
    );

    this.bindKeyHandlers();
  }

  stop(){
    clearInterval(this.timerId);
  }

}

export default GalaxyView;
