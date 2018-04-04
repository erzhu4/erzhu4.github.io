import Board from './board.js';
import SnakeView from './snakeView.js';

class SnakeGame {
    constructor(){
        this.board = new Board();
        this.view = new SnakeView(this.board, $('#snake'));
    }
}

export default SnakeGame;