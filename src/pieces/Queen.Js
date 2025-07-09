import { Piece } from "./Piece.js";

export class Queen extends Piece {
    constructor(color, row, col) {
        super(color, row, col)
        this.symbol = this.color === "white" ? "♕" : "♛";
        this.value = 8;
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
        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [1, 1],
            [-1, 1], 
            [1, -1], 
            [-1, -1]
        ]

        let legalMoves = [];

        for (let direction of directions) {
            let row = this.row;
            let col = this.col;
            while (board.inBounds(row, col)) {
                row += direction[0];
                col += direction[1];
                if (!board.inBounds(row, col)) break;
                const square = board.getSquare(row, col);
                const piece = square.getPiece();

                if (piece) {
                  if (piece.getColor() !== this.color) {
                        legalMoves.push({row,col});
                    }
                    break;
                } else {
                    legalMoves.push({row, col});
                }
                
            }
        }
        return legalMoves;
    }

}