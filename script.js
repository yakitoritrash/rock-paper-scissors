let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");

// Generate a random choice for the computer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(3)];
}

// Update the DOM with the current score
function updateScore() {
    scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

// Determine winner and update scores
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        winnerDisplay.textContent = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        winnerDisplay.textContent = "Human wins this round!";
    } else {
        computerScore++;
        winnerDisplay.textContent = "Computer wins this round!";
    }

    updateScore();
    checkForGameEnd();
}

// Check if any player reaches 5 points
function checkForGameEnd() {
    if (humanScore === 5) {
        winnerDisplay.textContent = "Human wins the game!";
        disableButtons();
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Computer wins the game!";
        disableButtons();
    }
}

// Disable the buttons when the game ends
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Play a round based on the player's choice
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    determineWinner(playerSelection, computerSelection);
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));
