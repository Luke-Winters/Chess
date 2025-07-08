import { Game } from "./src/game/Game.js";
const game = new Game();

const boardDiv = document.getElementById('chessboard');
console.log(boardDiv);
let selectedSquare = null;

game.getBoard().renderBoard(boardDiv, handleClicks);

function handleClicks(row, col) {
    const clickedPiece = game.getBoard().getSquare(row, col).getPiece();
    if (!selectedSquare && !clickedPiece) {
        return; 
    }

    if (!selectedSquare) {
        selectedSquare = { row, col };
        console.log('selected square', row, col);
    } else {
        const newSquare = { row, col };
        console.log('new square', row, col);
        const piece = game.getBoard().getSquare(selectedSquare.row, selectedSquare.col).getPiece();
        const moves = piece.getValidMoves(game.getBoard());
        const isValid = moves.some(move => move.row === row && move.col === col);
        if (piece.getColor() != game.getCurrentTurn()) {
            console.log('wrong color');
        } else if (isValid) {
            console.log('valid move');
            game.getBoard().movePiece(selectedSquare.row, selectedSquare.col, row, col);
            piece.setPosition(row, col);
            console.log('position set');
            console.log(game.getBoard().toString());
            game.changeTurn();
        } else {
            console.log('invalid move');
        }
        selectedSquare = null;
        game.getBoard().renderBoard(boardDiv, handleClicks);
    }
}

game.getBoard().renderBoard(boardDiv, handleClicks);