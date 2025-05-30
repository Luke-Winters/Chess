import { Piece } from "./Piece.js";

export class Rook extends Piece {
    constructor(color, row, col) {
        super(color, row, col)
        this.symbol = this.color === "white" ? "♖" : "♜";
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
        let legalMoves = [];
        //Right
        for (let row = this.row, col = this.col + 1; board.inBounds(row, col); col ++) {
            const piece = board.getSquare(row, col).getPiece();
            if (piece) {
                if (piece.getColor() !== this.color) {
                    legalMoves.push({row,col});
                }
                break;
            } else {
                legalMoves.push({row, col});
            }
        }
        //Left
        for (let row = this.row, col = this.col - 1; board.inBounds(row, col); col --) {
            const piece = board.getSquare(row, col).getPiece();
            if (piece) {
                if (piece.getColor() !== this.color) {
                    legalMoves.push({row,col});
                }
                break;
            } else {
                legalMoves.push({row, col});
            }
        }
        //UP
        for (let row = this.row + 1, col = this.col; board.inBounds(row, col); row ++) {
            const piece = board.getSquare(row, col).getPiece();
            if (piece) {
                if (piece.getColor() !== this.color) {
                    legalMoves.push({row,col});
                }
                break;
            } else {
                legalMoves.push({row, col});
            }
        }
        //DOWN
        for (let row = this.row - 1, col = this.col; board.inBounds(row, col); row --) {
            const piece = board.getSquare(row, col).getPiece();
            if (piece) {
                if (piece.getColor() !== this.color) {
                    legalMoves.push({row,col});
                }
                break;
            } else {
                legalMoves.push({row, col});
            }
        }
        return legalMoves;
    }
}