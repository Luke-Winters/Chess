import { Piece } from "./Piece.js";

export class Pawn extends Piece {
    constructor(color, row, col) {
        super(color, row, col)
        this.symbol = this.color === "white" ? "♙" : "♟︎";
    }

    getSymbol() {
        return this.symbol;
    }

    setPosition(row, col) {
        this.row = row;
        this.col = col;
    }

    getColor() {
        return this.color;
    }

    getValidMoves(board) {
        return [];
    }
}