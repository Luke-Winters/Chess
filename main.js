import { GameBoard } from "./src/game/GameBoard.js";

const gameBoard = new GameBoard();

const boardDiv = document.getElementById('chessboard');
console.log(boardDiv);
let selectedSquare = null;

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

            square.addEventListener("click", () => handleClicks(row, col));

            boardDiv.appendChild(square);    
        }
    }
}


function handleClicks(row, col) {
    if (!selectedSquare) {
        selectedSquare = { row, col };
        console.log('selected square', row, col);
    } else {
        const newSquare = { row, col };
        console.log('new square', row, col);
        const piece = gameBoard.getSquare(selectedSquare.row, selectedSquare.col).getPiece();
        const moves = piece.getValidMoves(gameBoard);
        const isValid = moves.some(move => move.row === row && move.col === col);
        if (isValid) {
            console.log('valid move');
            gameBoard.movePiece(selectedSquare.row, selectedSquare.col, row, col);
            piece.setPosition(row, col);
            console.log('position set');
            console.log(gameBoard.toString());
        } else {
            console.log('invalid move');
        }
        selectedSquare = null;
        renderBoard();
    }
}

renderBoard();