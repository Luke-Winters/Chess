import { Game } from "./src/game/Game.js";

let game = new Game();
let selectedSquare = null;
const boardDiv = document.getElementById('chessboard');
game.getBoard().renderBoard(boardDiv, handleClicks);
startNewGame();

// click handler function
function handleClicks(row, col) {
    const clickedPiece = game.getBoard().getSquare(row, col).getPiece();
    if (!selectedSquare && !clickedPiece) {
        return; 
    }
    // checks for selected square
    if (!selectedSquare) {
        selectedSquare = { row, col };
        console.log('selected square', row, col);

    // creates square to move piece to
    } else {
        const newSquare = { row, col };
        console.log('new square', row, col);
        const piece = game.getBoard().getSquare(selectedSquare.row, selectedSquare.col).getPiece();
        const moves = piece.getValidMoves(game.getBoard());
        const isValid = moves.some(move => move.row === row && move.col === col);
        // checks the piece is the right color
        if (piece.getColor() != game.getCurrentTurn()) {
            console.log('wrong color');
        // checks for valid move
        } else if (isValid) {
            console.log('valid move');
            // adds captured piece to lost piece array
            const targetPiece = game.getBoard().getSquare(row, col).getPiece();
            if (targetPiece && targetPiece.getColor() !== piece.getColor()) {
            const opposingTeam = targetPiece.getColor() === "white"
                ? game.getWhiteTeam()
                : game.getBlackTeam();
            opposingTeam.losePiece(targetPiece);
            }
            // moves piece
            game.getBoard().movePiece(selectedSquare.row, selectedSquare.col, row, col);
            piece.setPosition(row, col);
            console.log('position set');
            console.log(game.getBoard().toString());
            updateCapturedPieces();
            if (game.checkWinner()) {
                const winnerColor = game.getCurrentTurn();
                displayWinnerMessage(winnerColor);
            }
            game.changeTurn();
        } else {
            console.log('invalid move');
        }
        // resets squares
        selectedSquare = null;
        game.getBoard().renderBoard(boardDiv, handleClicks);
    }
}

// helper to update captured pieces
function updateCapturedPieces() {
    document.getElementById('captured-white-pieces').textContent = 
    game.getBlackTeam().getLostPieces();
    document.getElementById('captured-black-pieces').textContent = 
    game.getWhiteTeam().getLostPieces();
}

// helper function to display winner
function displayWinnerMessage(winnerColor) {
    const messageDiv = document.getElementById('winner-message');
    const newGameButtonDiv = document.getElementById('new-game-button');
    messageDiv.textContent = `${winnerColor.toUpperCase()} WINS!`;
    messageDiv.classList.add('show');
    newGameButtonDiv.classList.add('show');

}

// helper function to start new game
function startNewGame() {
    game = new Game();
    selectedSquare = null;
    document.getElementById('captured-white-pieces').textContent = '';
    document.getElementById('captured-black-pieces').textContent = '';
    document.getElementById('winner-message')?.classList.remove('show');
    document.getElementById('new-game-button')?.classList.remove('show');
    game.getBoard().renderBoard(boardDiv, handleClicks);
}

document.getElementById('new-game-button').addEventListener('click', startNewGame);

game.getBoard().renderBoard(boardDiv, handleClicks);