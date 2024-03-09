// use getComputerChoice to get any one of 'rock', 'paper' or 'scissors'

// we could use an array to store all the options

// let's start by using a random integer between 0 and 2 that returns a corresponding result

// if 0, return rock, 1 returns paper and 2 returns scissors
function getComputerChoice() {
    // define and get a random integer in [0, 2]
    let random_integer = Math.floor(Math.random() * 3);
    let computerSelection;
    switch (random_integer) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
    }

    return computerSelection;
}

function getPlayerChoice() {
    // request an input
    let playerSelection = prompt("Enter your choice of 'rock', 'paper' or 'scissors'.", 'rock');
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    if (playerSelection != 'rock' &&
        playerSelection != 'paper' &&
        playerSelection != 'scissors') {
            console.log("Invalid choice, reverting to default of 'rock'.");
            playerSelection = 'rock';
        }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
               (playerSelection == 'paper' && computerSelection == 'rock') ||
               (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}; you win!`);
    } else {
        console.log(`You selected ${playerSelection} and your opponent selected ${computerSelection}; you lose!`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getComputerChoice());
    }
}

// playRound(getPlayerChoice(), getComputerChoice());
playGame();