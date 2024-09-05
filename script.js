const computerChoice = Math.floor(Math.random() * 3) 
function getComputerChoice() {
  if (computerChoice === 0)
    return('rock')
  else if (computerChoice === 1)
    return('paper')
  else if (computerChoice === 2)
    return('scissors')

  }


  let humanChoice = prompt('Make your choice').toLowerCase()
function getHumanChoice() {
    return(humanChoice)
    
}


let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
console.log('You chose ' + getHumanChoice(humanChoice))
console.log('Computer chose ' + getComputerChoice(computerChoice))
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

playRound(humanSelection, computerSelection);