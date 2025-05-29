import { Piece } from "../pieces/Piece.js";

export class BoardSquare {
    constructor(row, col) {
        this.piece = null;
        this.row = row;
        this.col = col;
    }

    getPiece() {
        return this.piece;
    }
    setPiece(piece) {
        this.piece = piece;
    }
    removePiece() {
        this.piece = null;
    }
    isEmpty() {
        return this.piece === null;
    }
}