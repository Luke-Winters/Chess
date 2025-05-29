import { Piece } from "./Piece.js";

export class Pawn extends Piece {
    constructor(color, row, col) {
        super(color, row, col)
        this.symbol = this.color === "white" ? "♙" : "♟︎";
    }

    getSymbol() {
        return this.symbol;
    }

    getValidMoves(board) {
        return [];
    }
}