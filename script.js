//Dom variables
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const resultPara = document.getElementById('result-p');
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');
const winnerPointsSpan = document.getElementById('winner-points');

//Keep track of scores
let humScore = 0;
let compScore = 0; 

//How many points will the winner have
const winnerPoints = 7;

//function that gives computer result
function computerResult() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return 'rock';
    } else if (result === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

//function that gives result to a game
function gameResult(userChoice) {
    const compChoice = computerResult();
    const WINNERMESSAGE = `Computer chose ${compChoice}, You win!`;
    const LOSERMESSAGE = `Computer chose ${compChoice}, You lose!`;
    const TIEMESSAGE = `Computer chose ${compChoice}, It's a tie!`;
    

    if (humScore === winnerPoints || compScore === winnerPoints) {
        return;
    } else {
        if (userChoice === 'rock') {
            if (compChoice === 'rock') {
                resultPara.textContent = TIEMESSAGE;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            } else if (compChoice === 'paper') {
                resultPara.textContent = LOSERMESSAGE;
                compScore++;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            } else if (compChoice === 'scissors') {
                resultPara.textContent = WINNERMESSAGE;
                humScore++;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            }
        } else if (userChoice === 'paper') {
            if (compChoice === 'rock') {
                resultPara.textContent = WINNERMESSAGE;
                humScore++;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            } else if (compChoice === 'paper') {
                resultPara.textContent = TIEMESSAGE;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            } else if (compChoice === 'scissors') {
                resultPara.textContent = LOSERMESSAGE;
                compScore++;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            }
        } else {
            if (compChoice === 'rock') {
                resultPara.textContent = LOSERMESSAGE;
                compScore++;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            } else if (compChoice === 'paper') {
                resultPara.textContent = WINNERMESSAGE;
                humScore++;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            } else if (compChoice === 'scissors') {
                resultPara.textContent = TIEMESSAGE;
                humanScoreSpan.textContent = humScore;
                computerScoreSpan.textContent = compScore;
            }
        }
    }

    if (humScore === winnerPoints) {
        resultPara.textContent = "Congrats You Won!"
    } else if (compScore === winnerPoints) {
        resultPara.textContent = "Sorry You Lost!"
    }
};

//function that plays the game
function playGame(e) {
    gameResult(e.target.value);
};

winnerPointsSpan.textContent = winnerPoints;

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame)