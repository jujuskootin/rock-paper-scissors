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
if (humanChoice === 'rock' && computerChoice === 'scissors')
  console.log('Your score ' +humanScore + 1, 'You win!')
else if (humanChoice === 'rock' && computerChoice === 'paper')
  console.log('Computer Score ' +computerScore + 1, 'You lose!')
else if (humanChoice === 'paper' && computerChoice === 'rock')
  console.log('Your score ' +humanScore + 1, 'You win!')
else if (humanChoice === 'paper' && computerChoice === 'scissors')
  console.log('Computer Score ' +computerScore + 1, 'You lose!')
else if (humanChoice === 'scissors' && computerChoice === 'paper')
  console.log('Your score ' +humanScore + 1, 'You win!')
else if (humanChoice === 'scissors' && computerChoice === 'rock')
  console.log('Computer Score ' +computerScore + 1, 'You lose!')
else if (humanChoice == computerChoice)
  console.log('It\'s a tie!')
}

console.log('You chose ' + getHumanChoice(humanChoice))
console.log('Computer chose ' + getComputerChoice(computerChoice))


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
