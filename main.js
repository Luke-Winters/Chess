import { GameBoard } from "./src/game/GameBoard.js";

const gameBoard = new GameBoard();

const boardDiv = document.getElementById('chessboard');
console.log(boardDiv);

function renderBoard() {
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

            const piece = gameBoard.getSquare(row, col).getPiece();
            if (piece) {
                square.textContent = piece.getSymbol();
            }

            boardDiv.appendChild(square);    
        }
    }
}

renderBoard();