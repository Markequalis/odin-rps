document.addEventListener('DOMContentLoaded', () => {
    const allowedChoices = ['rock', 'paper', 'scissors'];

    const getComputerChoice = () => {
        const i = Math.floor(Math.random() * 3);
        return allowedChoices[i];
    }

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        let result = '';

        if (!allowedChoices.includes(humanChoice)) {
            result = 'Invalid selection. Please choose rock, paper, or scissors!';
        } else if (humanChoice === computerChoice) {
            result = 'It\'s a tie!';
        } else if (humanChoice === 'rock') {
            result = computerChoice === 'paper' ? 'Player loses! Paper beats rock!' : 'Player wins! Rock beats scissors!';
        } else if (humanChoice === 'paper') {
            result = computerChoice === 'scissors' ? 'Player loses! Scissors beats paper!' : 'Player wins! Paper beats rock!';
        } else if (humanChoice === 'scissors') {
            result = computerChoice === 'rock' ? 'Player loses! Rock beats scissors!' : 'Player wins! Scissors beats paper!';
        }

        
        document.getElementById('pchoiceimg').src = `resources/images/${humanChoice}.png`;
        document.getElementById('cchoiceimg').src = `resources/images/${computerChoice}.png`;

        return result;
    }

    let humanScore = 0;
    let computerScore = 0;
    let currentRoundNumber = 1;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const humanChoice = event.target.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);

            document.getElementById('rnumber').textContent = currentRoundNumber;

            if (result.includes('wins')) {
                humanScore++;
            } else if (result.includes('loses')) {
                computerScore++;
            }

            currentRoundNumber++;

            const resultReasonElement = document.getElementById('result-reason');
            resultReasonElement.textContent = result;
            resultReasonElement.style.display = 'block';

            if (humanScore === 5 || computerScore === 5) {
                let finalResult = `Final scores: Player: ${humanScore}, Computer: ${computerScore}. `;
                if (humanScore > computerScore) {
                    finalResult = 'The player wins overall!';
                } else {
                    finalResult = 'The computer wins overall!';
                }
                document.getElementById('results').textContent = `Final scores: Player: ${humanScore}, Computer: ${computerScore}`;
                document.getElementById('final-result').textContent = finalResult;
                
                resultReasonElement.style.display = 'none';

                humanScore = 0;
                computerScore = 0;
                currentRoundNumber = 1;
            } else {
                document.getElementById('results').textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
                document.getElementById('final-result').textContent = '';
            }
        }
    });
});