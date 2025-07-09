import { Pawn } from "../pieces/Pawn.js";
import { Rook } from "../pieces/Rook.js";
import { Bishop } from "../pieces/Bishop.js";
import { Knight } from "../pieces/Knight.js";
import { King } from "../pieces/King.js";
import { Queen } from "../pieces/Queen.js";

export class Team {
    constructor(color) {
        this.color = color;
        this.pieces = [];
        for (let i = 0; i < 8; i ++) {
            this.pieces.push(new Pawn(color));
        }
        for (let i = 0; i < 2; i ++) {
            this.pieces.push(new Rook(color), new Bishop(color), new Knight(color));
        }
        this.pieces.push(new King(color), new Queen(color));
        this.lostPieces = [];
    }

    losePiece(piece) {
        for (let i = 0; i < this.pieces.length; i ++) {
            if (piece.getSymbol() === this.pieces[i].getSymbol()) {
                this.lostPieces.push(this.pieces[i]);
                this.pieces.splice(i, 1);
                break;
            }
        }
    }

    getPieces() {
        return this.pieces;
    }

    getLostPieces() {
        return this.lostPieces.map(p => p.getSymbol()).join(" ");
    }

    


}