//Setting computer and player selection
let player, playerSelection, computerSelection;
//Setting scores
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;




function userInstructions(){
    alert('You are about to play 5 rounds of Rock Paper Scissors');
    alert('Please open your console to check the output'); 
    alert('Press F12 -> console tab in your browser to open your console'); 
}


function getComputerChoice(){
    //getting a random number between 1 and 3 to choose
    let choice = Math.floor(Math.random()*3)+1;
    switch (choice){
        case 1:
            return `rock`;
            break;
        case 2:
            return `paper`;
            break;
        case 3:
            return `scissors`;
            break;
        default:
            return `ERROR`;
    }
}

function gameRound(playerSelection,computerSelection){
    //Game logic
    if (playerSelection === computerSelection){
        console.log(`It's a tie`);
    }else if (playerSelection === `rock` && computerSelection === `scissors`){
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    }else if (playerSelection === `rock` && computerSelection === `paper`){
        console.log(`Computer wins :( ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
    }else if (playerSelection === `scissors` && computerSelection === `paper`){
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    }else if (playerSelection === `scissors` && computerSelection === `rock`){
        console.log(`Computer wins :( ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;        
    }else if (playerSelection === `paper` && computerSelection === `rock`){
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    }else if (playerSelection === `paper` && computerSelection === `scissors`){
        console.log(`Computer wins :( ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
    }else {console.log(`ERROR: ` + playerSelection + ` or ` + computerSelection + ` does not exists.`)}
}

function validatePlayer(){
    //looping to validate the null, undefined or wrong values
    while(true){
        player = prompt(`ROUND: ${roundNumber} Enter your choice: Rock, Paper or Scissors`);
        playerSelection = player === null ? '' : player;
        switch (playerSelection.toLowerCase()){
            case 'rock':
                return playerSelection.toLowerCase();
                break;
            case 'paper':
                return playerSelection.toLowerCase();
                break;
            case 'scissors':
                return playerSelection.toLowerCase();
                break;
            case null:
            case '':
            case undefined:
                console.log(`An empty or null value is not supported, please enter a valid value`);
                break;
            default:
                console.log(`${player} is not a valid value, please select either Rock, Paper or Scissors to play`); 
        }
    }
}

function game(){
    //Instructions for the user
    userInstructions();

    //Round 1
    playerSelection = validatePlayer();
    computerSelection = getComputerChoice();
    gameRound(playerSelection,computerSelection);
    console.log(`ROUND ${roundNumber} has finished. The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}`);
    roundNumber += 1
    
    //Round 2
    playerSelection = validatePlayer();
    computerSelection = getComputerChoice();
    gameRound(playerSelection,computerSelection);
    console.log(`ROUND ${roundNumber} has finished. The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}`);
    roundNumber += 1
    
    //Round 3
    playerSelection = validatePlayer();
    computerSelection = getComputerChoice();
    gameRound(playerSelection,computerSelection);
    console.log(`ROUND ${roundNumber} has finished. The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}`);
    roundNumber += 1
    
    //Round 4
    playerSelection = validatePlayer();
    computerSelection = getComputerChoice();
    gameRound(playerSelection,computerSelection);
    console.log(`ROUND ${roundNumber} has finished. The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}`);
    roundNumber += 1
    
    //Round 5
    playerSelection = validatePlayer();
    computerSelection = getComputerChoice();
    gameRound(playerSelection,computerSelection);
    console.log(`ROUND ${roundNumber} has finished. The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}`);


    finalScore();
}

function finalScore(){
    if (playerScore > computerScore){
        console.info(`YOU WIN!..... The final score is PLAYER: ${playerScore} - COMPUTER: ${computerScore}`);
    } else if (computerScore > playerScore){
        console.info(`YOU LOSE!..... The final score is COMPUTER: ${computerScore} - PLAYER: ${playerScore}`);
    } else {
        console.info(`WEIRD... IT'S A TIE!..... The final score is PLAYER: ${playerScore} - COMPUTER: ${computerScore}`);
    }
}






//Play the game (5 rounds)
game();