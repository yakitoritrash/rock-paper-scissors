console.log("Hi!");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandomInt(3);
    if (number === 0) {
        return "Paper";
    } else if (number === 1) {
        return "Scissors";
    } else if (number === 2) {
        return "Rock";
    }
}


function getHumanChoice(){
    let human = prompt("choose, human");
    return human = human.charAt(0).toUpperCase() + human.slice(1).toLowerCase();
    console.log(human);
}

function determineWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "Human wins!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log ("Human chose: " + humanChoice);
    console.log ("Computer chose: " + computerChoice);
    console.log(determineWinner(humanChoice, computerChoice))
}

playGame();