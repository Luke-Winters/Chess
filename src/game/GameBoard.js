import { BoardSquare } from "./BoardSquare.js";
import { Rook } from "../pieces/Rook.js";
import { Bishop } from "../pieces/Bishop.js";
import { Knight } from "../pieces/Knight.js";
import { King } from "../pieces/King.js";
import { Queen } from "../pieces/Queen.js";
import { Pawn } from "../pieces/Pawn.js";

export class GameBoard {
    constructor () {
        this.rows = 8;
        this.cols = 8;
        this.spaces = [];
        this.setUpBoard();
        this.initializePieces();
    }
    setUpBoard() {
        for (let i = 0; i < this.rows; i ++) {
            this.spaces[i] = [];
            for (let j = 0; j < this.cols; j ++) {
                this.spaces[i].push(new BoardSquare(i, j));
            }
        }
    }
    initializePieces() {
        for (let col = 0; col < 8; col ++) {
            this.getSquare(1, col).setPiece(new Pawn("black", 1, col));
            this.getSquare(6, col).setPiece(new Pawn("white", 6, col));
        }
    
        const pieceOrder = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
        for (let col = 0; col < 8; col ++) {
            this.getSquare(0, col).setPiece(new pieceOrder[col]("black", 0, col));
            this.getSquare(7, col).setPiece(new pieceOrder[col]("white", 7, col));
        }
    }
    getAllSquares() {
        return this.spaces;
    }
    getSquare(row, col) {
        return this.spaces[row][col];
    }
    inBounds(row, col) {
        return (
            row < 8 && row >= 0 &&
            col < 8 && col >= 0
        );
    }
    movePiece(row1, col1, row2, col2) {
        const piece = this.spaces[row1][col1].getPiece();
        console.log('peice set');
        if (piece) {
            this.spaces[row2][col2].setPiece(piece);
            this.spaces[row1][col1].removePiece();
            console.log('piece moved');
        }
    }
    renderBoard(boardDiv, clickHandler) {
        boardDiv.innerHTML = "";
        let count = 1;
        for (let row = 0; row < 8; row ++) {
            for (let col = 0; col < 8; col ++) {
                const square = document.createElement('div');
                square.classList.add('square');
                if ((row + col) % 2 === 0) {
                    square.classList.add('light');
                } else {
                    square.classList.add('dark');
                }
                square.dataset.row = row;
                square.dataset.col = col;
    
                const piece = this.getSquare(row, col).getPiece();
                if (piece) {
                    square.textContent = piece.getSymbol();
                }
    
                square.addEventListener("click", () => clickHandler(row, col));
    
                boardDiv.appendChild(square);    
            }
        }
    }
    toString() {
        let str = "";
        for (let i = 0; i < this.spaces.length; i ++) {
            for (let j = 0; j < this.spaces[i].length; j ++) {
                const square = this.spaces[i][j];
                const piece = square.getPiece();
                if (piece) {
                    str += piece.getSymbol();
                } else {
                    if ((i + j) % 2 === 0) {
                        str += '□';
                    } else {
                        str += '■'
                    }
                }
            }
            str += '\n';
        }
        return str;
    }
}


