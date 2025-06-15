import { GameBoard } from "./GameBoard";
import { Team } from "./Team";

export class Game {
    constructor() {
        this.board = new GameBoard();
        this.whiteTeam = new Team('white');
        this.blackTeam = new Team('black');
        this.currentTurn = 'white';
    }

    changeTurn() {
        if (turn === 'white') {
            this.currentTurn = 'black';
        } else {
            this.currentTurn = 'white';
        }
    }

    checkWinner() {
        
    }
}