
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) 
    if (computerChoice === 0)
      return('rock')
    else if (computerChoice === 1)
      return('paper')
    else if (computerChoice === 2)
      return('scissors')
}
   
function getHumanChoice() {
 let humanChoice = prompt('Make your choice').toLowerCase()
  return(humanChoice)
}

function endGame(){
  if (humanScore < computerScore)
    alert('You Lose! Computer wins!')
  else if (humanScore > computerScore)
    alert('You win!!!')
  else if (humanScore === computerScore)
    alert('It\'s a tie')
console.log('Refresh the web page to play again')
}
function playGame(humanScore, computerScore) {
  for (let i = 1; i < 6; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  endGame(humanScore, computerScore)
}
  

let humanScore = 0
let computerScore = 0
  //Create a new function named playGame.
  //Move your playRound function and score variables so that they’re declared inside of the new playGame function
  //Play 5 rounds by calling playRound 5 times
  


  

playGame(humanScore, computerScore)

function playRound(humanSelection, computerSelection) {
  console.log('You chose ' + (humanSelection))
  console.log('Computer chose ' + (computerSelection))
  if (humanSelection == computerSelection)
    console.log('It\'s a tie!')
  else if (humanSelection === 'rock' && computerSelection === 'scissors')
    console.log('You win!'), humanScore++
  else if (humanSelection === 'rock' && computerSelection === 'paper')
    console.log('You lose!'), computerScore++
  else if (humanSelection === 'paper' && computerSelection === 'rock')
    console.log('You win!'), humanScore++
  else if (humanSelection === 'paper' && computerSelection === 'scissors')
    console.log('You lose!'), computerScore++
  else if (humanSelection === 'scissors' && computerSelection === 'paper')
    console.log('You win!'), humanScore++
  else if (humanSelection === 'scissors' && computerSelection === 'rock')
    console.log('You lose!'), computerScore++
  console.log('Your score ' + humanScore)
  console.log('Computer score ' + computerScore)
}