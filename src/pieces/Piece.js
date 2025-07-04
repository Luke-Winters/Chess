export class Piece {
    constructor(color, row, col) {
        if (new.target === Piece) {
            throw new Error("Cannot initiate abstract class");
        }

        this.color = color;
        this.row = row;
        this.col = col;
    }

    getSymbol() {
        throw new Error("getSymbol() must be called by subclass");
    }

    setPosition(row, col) {
        throw new Error("setPosition() must be called by subclass");
    }

    getValidMoves(board) {
        throw new Error("getValidMoves() must be called by subclass");
    }

    getColor() {
        throw new Error("getColor() must be called by subclass");
    }
}