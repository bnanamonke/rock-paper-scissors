function getComputerChoice() {
   let choice = Math.floor(Math.random() * (3 - 0) +  0);
       if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = window.prompt("rock, paper or scissors");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice().toLowerCase();

    function playRound(humanChoice, computerChoice) {
        console.log(computerChoice);
        console.log(humanChoice);
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                humanScore ++;
                return "You win! Paper beats Rock.";
            } else if (humanChoice == "scissors") {
                computerScore ++;
                return "You lose! Rock beats Scissors";
            } else {
                return "No one wins.";
            }
        } else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                humanScore ++;
                return "You win! Scissors beats Paper.";
            } else if (humanChoice == "rock") {
                computerScore ++;
                return "You lose! Paper beats Rock.";
            } else {
                return "No one wins.";
            }
        } else {
            if (humanChoice == "rock") {
                humanScore ++;
                return "You win! Rock beats Scissors.";
            } else if (humanChoice == "paper") {
                computerScore ++;
                return "You lose! Scissors beats Paper.";
            } else {
                return "No one wins.";
            }
        }
    }
    
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice().toLowerCase();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice().toLowerCase();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice().toLowerCase();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice().toLowerCase();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);

    if (computerScore > humanScore) {
        console.log("Computer wins.");
    } else if (computerScore < humanScore) {
        console.log("Human wins.");
    } else {
        console.log("No one wins");
    }
}

playGame();