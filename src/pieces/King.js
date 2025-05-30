import { Piece } from "./Piece.js";

export class King extends Piece {
    constructor(color, row, col) {
        super(color, row, col)
        this.symbol = this.color === "white" ? "♔" : "♚";
    }

    getSymbol() {
        return this.symbol;
    }

    getColor() {
        return this.color;
    }

    setPosition(row, col) {
        this.row = row;
        this.col = col;
    }

    getValidMoves(board) {
        return [];
    }
}