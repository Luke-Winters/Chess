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
        const allMoves = [
            { row: this.row - 1 , col: this.col },
            { row: this.row + 1, col: this.col },
            { row: this.row, col: this.col + 1  },
            { row: this.row, col: this.col - 1  },
            { row: this.row - 1, col: this.col - 1  },
            { row: this.row + 1, col: this.col + 1  },
            { row: this.row - 1, col: this.col + 1  },
            { row: this.row + 1, col: this.col - 1  }
        ]

        let legalMoves = [];

        for (let move of allMoves) {
            if (board.inBounds(move.row, move.col)) {
                const piece = board.getSquare(move.row, move.col).getPiece();
                if (!piece || piece.color !== this.color) {
                    legalMoves.push(move);
                }
            }
        }
        return legalMoves;
    }
}