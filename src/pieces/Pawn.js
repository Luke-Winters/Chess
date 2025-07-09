import { Piece } from "./Piece.js";

export class Pawn extends Piece {
    constructor(color, row, col) {
        super(color, row, col)
        this.symbol = this.color === "white" ? "♙" : "♟︎";
        this.value = 1;
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
        let legalMoves = [];
        const direction = this.color === 'white' ? -1 : 1;
        const startRow = this.color === 'white' ? 6 : 1;

        const oneStep = {row: this.row + direction, col: this.col};
        if (board.inBounds(oneStep.row, oneStep.col) && board.getSquare(oneStep.row, oneStep.col).isEmpty()) {
            legalMoves.push(oneStep);
        

            const twoStep = {row: this.row + 2 * direction, col: this.col};
            if (this.row === startRow && board.getSquare(twoStep.row, twoStep.col).isEmpty()) {
            legalMoves.push(twoStep);
            }
        }

        const diagonals = [
            { row: this.row + direction, col: this.col - 1 },
            { row: this.row + direction, col: this.col + 1 }
        ];
        for (let move of diagonals) {
            if (board.inBounds(move.row, move.col)) {
                const square = board.getSquare(move.row, move.col);
                const piece = square.getPiece();
                if (piece && piece.getColor() != this.color) {
                    legalMoves.push(move);
                }
            }
        }
        return legalMoves;
    }
}