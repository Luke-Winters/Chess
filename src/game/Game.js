import { GameBoard } from "./GameBoard.js";
import { Team } from "./Team.js";

export class Game {
    constructor() {
        this.board = new GameBoard();
        this.whiteTeam = new Team('white');
        this.blackTeam = new Team('black');
        this.currentTurn = 'white';
    }

    changeTurn() {
        if (this.currentTurn === 'white') {
            this.currentTurn = 'black';
        } else {
            this.currentTurn = 'white';
        }
    }

    getBoard() {
        return this.board;
    }

    getCurrentTurn() {
        return this.currentTurn;
    }

    checkWinner() {
        
    }
}