
function getComputerChoice() {
const computerChoice = Math.floor(Math.random() * 3) 
  if (computerChoice === 0)
    return('rock')
  else if (computerChoice === 1)
    return('paper')
  else if (computerChoice === 2)
    return('scissors')
  }



function getHumanChoice() {
  const humanChoice = prompt('Make your choice').toLowerCase()
    return(humanChoice)

}


let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
console.log('You chose ' + (humanChoice))
console.log('Computer chose ' + (computerChoice))
if (humanChoice == computerChoice)
  console.log('It\'s a tie!')
else if (humanChoice === 'rock' && computerChoice === 'scissors')
  console.log('You win!'), humanScore++
else if (humanChoice === 'rock' && computerChoice === 'paper')
  console.log('You lose!'), computerScore++
else if (humanChoice === 'paper' && computerChoice === 'rock')
  console.log('You win!'), humanScore++
else if (humanChoice === 'paper' && computerChoice === 'scissors')
  console.log('You lose!'), computerScore++
else if (humanChoice === 'scissors' && computerChoice === 'paper')
  console.log('You win!'), humanScore++
else if (humanChoice === 'scissors' && computerChoice === 'rock')
  console.log('You lose!'), computerScore++
console.log('Your score ' + humanScore)
console.log('Computer score ' + computerScore)
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



//Create a new function named playGame.
//Move your playRound function and score variables so that they’re declared inside of the new playGame function
//Play 5 rounds by calling playRound 5 times

function playGame(humanScore, computerScore) {
playRound(humanSelection, computerSelection)
prompt('Round two' ); playRound(humanSelection, computerSelection)

}

playGame(humanSelection, computerSelection);