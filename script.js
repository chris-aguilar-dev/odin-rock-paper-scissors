//A way to start the game
function playGame() {
    //Each player needs a selection
    const playerSelection = getPlayerChoice();
    const computerSelction = getComputerChoice();

    if (playerSelection == 'rock') {
        if (computerSelction == 'rock') {
            return "It's a tie";
        } else if (computerSelction == 'paper') {
            return "You lose";
        } else {
            return "You win";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelction == 'rock') {
            return "You win";
        } else if (computerSelction == 'paper') {
            return "It's a tie";
        } else {
            return "You lose"
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelction == 'rock') {
            return "You lose";
        } else if (computerSelction == 'paper') {
            return "You win";
        } else {
            return "It's a tie"
        }
    } else {
        return "Please make a valid selection."
    }
}

//Function to get player choice
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    let answer = playerChoice.toLowerCase();
    return answer;
}

//Function to get computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return 'rock'
    } else if (computerChoice == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//Function that runs the game 5 times
function autoGame(num) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < num; i++) {
        let game = playGame();

        if (game == 'You win') {
            playerScore++;
            alert(`You win; Human: ${playerScore}, Computer: ${computerScore}`);
        } else if (game == 'You lose') {
            computerScore++;
            alert(`You lose; Human: ${playerScore}, Computer: ${computerScore}`);
        } else {
            alert(`It's a tie; Human: ${playerScore}, Computer: ${computerScore}`);
        }

        console.log(game);
        
    }

    if (playerScore > computerScore) {
        alert("Final Result: Win")
    } else if (playerScore < computerScore) {
        alert("Final Result: Lost")
    } else {
        alert("Final Result: Tie")
    }
};