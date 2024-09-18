const getComputerChoice = () => {
    const i = Math.floor(Math.random() * 3);
    switch (i) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const getHumanChoice = () => {
    return(prompt('Rock, paper, or scissors?'));
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let currentRoundNumber = 1;

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            return 'It\'s a tie!';
        }
        if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Player loses! Paper beats rock!';
            } else {
                return 'Player wins! Rock beats scissors!';
            }
        }
        if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'Player loses! Scissors beats paper!';
            } else {
                return 'Player wins! Paper beats rock!';
            }
        }
        if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'Player loses! Rock beats scissors!';
            } else {
                return 'Player wins! Scissors beats paper!';
            }
        } else {
            return 'Invalid selection. Please choose rock, paper, or scissors!';
        }
    }
    
    while (currentRoundNumber <= 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(`Round ${currentRoundNumber}:`);
        console.log(`Player chose ${humanChoice}.`);
        console.log(`The computer chose ${computerChoice}.`);
        console.log(result);

        if (result.includes('wins')) {
            humanScore++;
        } else if (result.includes('loses')) {
            computerScore++;
        }

        currentRoundNumber++;
    }

    console.log(`The final scores: Player: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log('The player wins overall!');
    } else if (humanScore < computerScore) {
        console.log('The computer wins overall!');
    } else {
        console.log('It\'s a tie!');
    }
}
playGame();