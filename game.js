//Setting computer and player selection
let player, playerSelection, computerSelection;
//Setting scores
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let roundsQuantity = 5;


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

function getWinner(playerSelection,computerSelection){
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

function playRoundButton(){
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const output = document.querySelector('#output');
    const reset = document.querySelector('#reset');

    rock.addEventListener('click',getPlayerChoiceRock);
    paper.addEventListener('click',getPlayerChoicePaper);
    scissors.addEventListener('click',getPlayerChoiceScissors);
    reset.addEventListener('click',resetGame)


    function getPlayerChoiceRock(e){
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        getWinner(playerSelection,computerSelection);
        output.style.display='block';
        output.style.color = '#E4D0D0';
        output.innerHTML=`  <h3>Round ${roundNumber}/${roundsQuantity}</h3>
                            <ul><li>Player Selection: ${e.target.id}</li>
                            <li>Computer Selection: ${computerSelection}</li></ul>
                            <h4>Round ${roundNumber} has finished.</h4>
                            <h4>The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}</h4>`;
        roundNumber += 1;
        if (roundNumber > roundsQuantity){
            getFinalScore();
            roundNumber = 1;
            playerScore = 0;
            computerScore = 0;
        }
    }
    function getPlayerChoicePaper(e){
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        getWinner(playerSelection,computerSelection);
        output.style.display='block';
        output.style.color = '#E4D0D0';
        output.innerHTML=`  <h3>Round ${roundNumber}/${roundsQuantity}</h3>
                            <ul><li>Player Selection: ${e.target.id}</li>
                            <li>Computer Selection: ${computerSelection}</li></ul>
                            <h4>Round ${roundNumber} has finished.</h4>
                            <h4>The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}</h4>`;
        roundNumber += 1;
        if (roundNumber > roundsQuantity){
            getFinalScore();
            roundNumber = 1;
            playerScore = 0;
            computerScore = 0;
        }
    }
    function getPlayerChoiceScissors(e){
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        getWinner(playerSelection,computerSelection);
        output.style.display='block';
        output.style.color = '#E4D0D0';
        output.innerHTML=`  <h3>Round ${roundNumber}/${roundsQuantity}</h3>
                            <ul><li>Player Selection: ${e.target.id}</li>
                            <li>Computer Selection: ${computerSelection}</li></ul>
                            <h4>Round ${roundNumber} has finished.</h4>
                            <h4>The Overall Score is: Player: ${playerScore} - Computer: ${computerScore}</h4>`;
        roundNumber += 1;
        if (roundNumber > roundsQuantity){
            getFinalScore();
            roundNumber = 1;
            playerScore = 0;
            computerScore = 0;

        }
    }
    function resetGame(e){
        output.style.display='none';    
        roundNumber = 1;
        playerScore = 0;
        computerScore = 0;
        console.clear;
    }

      
}


function getFinalScore(){
    if (playerScore > computerScore){
        //alert(`YOU WIN!..... The final score is PLAYER: ${playerScore} - COMPUTER: ${computerScore}`);
        output.style.color = 'green';
        output.innerHTML=`<h2>YOU WIN</h2> <h3>The final score is PLAYER: ${playerScore} - COMPUTER: ${computerScore}</h3>`;
    } else if (computerScore > playerScore){
        //alert(`YOU LOSE!..... The final score is COMPUTER: ${computerScore} - PLAYER: ${playerScore}`);
        output.style.color = 'red';
        output.innerHTML=`<h2>YOU LOSE</h2> <h3>The final score is COMPUTER: ${computerScore} - PLAYER: ${playerScore}</h3>`;
    } else {
        //alert(`WEIRD... IT'S A TIE!..... The final score is PLAYER: ${playerScore} - COMPUTER: ${computerScore}`);
        output.style.color = 'blue';
        output.innerHTML=`<h2>WEIRD... IT'S A TIE</h2> <h3>The final score is PLAYER: ${playerScore} - COMPUTER: ${computerScore}</h3>`;
    }
    console.clear();
}

playRoundButton();