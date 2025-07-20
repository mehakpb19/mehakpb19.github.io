let turn = 'X turn';
let btn = document.querySelectorAll('button');
let dialogs = document.querySelector('.dialogs'); // Correctly select by class
let moves = 0;
let gameActive = true; // Flag to control game state (true when ongoing, false when won/drawn)

// All possible winning combinations (indices of the buttons in the 'btn' NodeList)
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal (top-left to bottom-right)
    [2, 4, 6] // Diagonal (top-right to bottom-left)
];

// Initialize the dialogs text when the page loads
dialogs.innerText = turn;

btn.forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent further action if the game is not active (won/drawn)
        // or if the clicked button already has text (is occupied)
        if (!gameActive || event.target.innerText !== "") {
            return; // Exit the function, do nothing
        }

        let clickedbtn = event.target;
        moves++; // Increment the move counter

        // Determine which player's turn it is and place their mark
        if (turn === 'X turn') {
            clickedbtn.innerText = "X";
            clickedbtn.style.color = '#FF4500'; // Make X orange-red
            turn = 'O turn';
        } else {
            clickedbtn.innerText = "O";
            clickedbtn.style.color = '#0000FF'; // Make O blue
            turn = 'X turn';
        }

        // After each move, check if there's a winner or a draw
        checkGameStatus();

        // If the game is still active, update the dialogs to show the next turn
        if (gameActive) {
            dialogs.innerText = turn;
        }
    });
});

// --- Function to check for a winner or a draw ---
function checkGameStatus() {
    let winnerFound = false;

    // Iterate through all possible winning combinations
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        // Get the innerText of the three buttons in the current combination
        const cell1 = btn[combo[0]].innerText;
        const cell2 = btn[combo[1]].innerText;
        const cell3 = btn[combo[2]].innerText;

        // Check if all three cells in the combo are not empty AND
        // if they all have the same mark (meaning a player has won)
        if (cell1 !== "" && cell1 === cell2 && cell2 === cell3) {
            dialogs.innerText = `${cell1} Wins!`; // Declare the winner
            gameActive = false; // Set game to inactive (no more moves allowed)
            winnerFound = true;

            // Optional: Highlight the winning cells for visual feedback
            btn[combo[0]].style.backgroundColor = 'lightgreen';
            btn[combo[1]].style.backgroundColor = 'lightgreen';
            btn[combo[2]].style.backgroundColor = 'lightgreen';

            // Reset the game after a short delay (e.g., 2 seconds)
            setTimeout(resetGame, 2000);
            break; // A winner is found, no need to check other combos
        }
    }

    // If no winner was found after checking all combinations AND
    // all 9 moves have been made (meaning the board is full)
    if (!winnerFound && moves === 9) {
        dialogs.innerText = "It's a Draw!"; // Declare a draw
        gameActive = false; // Set game to inactive
        // Reset the game after a short delay
        setTimeout(resetGame, 2000);
    }
}

// --- Function to reset the game board to its initial state ---
function resetGame() {
    moves = 0; // Reset move counter
    turn = 'X turn'; // Reset turn to X
    gameActive = true; // Set game back to active
    dialogs.innerText = turn; // Update dialogs to show the new starting turn

    btn.forEach(button => {
        button.innerText = ""; // Clear the text from all buttons
        button.style.backgroundColor = ''; // Remove any winning highlight
        button.style.color = '#333'; // Reset text color to default
    });
}