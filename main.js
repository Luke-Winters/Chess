import { GameBoard } from "./src/game/GameBoard.js";
// import { Team } from "./src/game/Team.js";

const gameBoard = new GameBoard();

const boardDiv = document.getElementById('chessboard');
console.log(boardDiv);
let selectedSquare = null;

gameBoard.renderBoard(boardDiv, handleClicks);


function handleClicks(row, col) {
    const clickedPiece = gameBoard.getSquare(row, col).getPiece();
    if (!selectedSquare && !clickedPiece) {
    return; 
    }

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
        gameBoard.renderBoard(boardDiv, handleClicks);
    }
}

gameBoard.renderBoard(boardDiv, handleClicks);