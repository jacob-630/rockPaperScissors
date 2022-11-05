
    var playerScore = 0;
    var computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    if(computerChoice == 0){
        return 'rock'
    }
    else if (computerChoice == 1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// function getPlayerChoice(string){
//     let playerChoice = string;
//     playerChoice = playerChoice.toLowerCase();
//     return playerChoice;
//  }



//const getPlayerChoice = 'rock';
function playRound(getComputerChoice, getPlayerChoice){
    // let computerSelection = getComputerChoice();
    // let playerSelection = getPlayerChoice();
    console.log(getComputerChoice, getPlayerChoice);
    //Player chooses rock
    if(getPlayerChoice == 'rock'){
        if(getComputerChoice == 'rock'){
            return 'draw';
        }
        else if(getComputerChoice == 'paper'){
            computerScore++;
            return 'computer wins';
        }
        else{
            playerScore++;
            return 'player wins'

        }
    }

    //Player chooses paper
    else if(getPlayerChoice == 'paper'){
        if(getComputerChoice == 'paper'){
            return 'draw';
        }
        else if(getComputerChoice == 'scissors'){
            computerScore++;
            return 'computer wins';


        }
        else{
            playerScore++;
            return 'player wins'

        }
    }

    //Player chooses scisssors
    if(getPlayerChoice == 'scissors'){
        if(getComputerChoice == 'scissors'){
            return 'draw';
        }
        else if(getComputerChoice == 'rock'){
            computerScore++;
            return 'computer wins';


        }
        else{
            playerScore++;
            return 'player wins'

        }
    }

}

function game(){
        playRound(getComputerChoice(), getPlayerChoice);
}
//playRound(getComputerChoice(), getPlayerChoice(prompt('rock paper or scissors')));

//console.log(playRound(getComputerChoice(), getPlayerChoice(prompt('rock paper or scissors'))));




// Dom SetUp for HTML Page


const result = document.querySelector('#result');


//recieve button inputs and run game function when called
const rockButton = document.querySelector('.rock')
rockButton.addEventListener('click', () => {
    getPlayerChoice = 'rock';
    game();
    result.textContent = `Player chose rock, current score: ${playerScore} : ${computerScore}`;

    if(playerScore == 5){
        result.textContent = 'Horray, Player Wins!!!';
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        result.textContent = 'Oh no, Player Losses!!!';
        playerScore = 0;
        computerScore = 0;
    }

});

const paperButton = document.querySelector('.paper')
paperButton.addEventListener('click', () => {
    getPlayerChoice = 'paper';
    game();
    result.textContent = `Player chose paper, current score: ${playerScore} : ${computerScore}`;

    if(playerScore == 5){
        result.textContent = 'Horray, Player Wins!!!';
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        result.textContent = 'Oh no, Player Losses!!!';
        playerScore = 0;
        computerScore = 0;
        
    }

});

const scissorsButton = document.querySelector('.scissors')
scissorsButton.addEventListener('click', () => {
    getPlayerChoice = 'scissors';
    game();
    result.textContent = `Player chose scissors, current score: ${playerScore} : ${computerScore}`;

    if(playerScore == 5){
        result.textContent = 'Horray, Player Wins!!!';
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        result.textContent = 'Oh no, Player Losses!!!';
        playerScore = 0;
        computerScore = 0;
    }

});



// const buttonPress = document.querySelector('.btn')
// buttonPress.addEventListener('click', () => {
//     //result.textContent = 'Button was clicked';
//     console.log('Button Pressed')
// });


