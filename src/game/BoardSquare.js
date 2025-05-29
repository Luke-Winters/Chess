import { Piece } from "../pieces/Piece.js";

export class BoardSquare {
    constructor(row, col) {
        this.piece = null | Piece;
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
        const tempPiece = this.piece;
        this.piece = null;
        return tempPiece;
    }
    isEmpty() {
        return this.piece === null;
    }
}