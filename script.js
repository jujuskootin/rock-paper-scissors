const comChoice = Math.floor(Math.random() * 3) 
function getComputerChoice() {
  if (comChoice === 0)
    console.log('rock')
  else if (comChoice === 1)
    console.log('paper')
  else if (comChoice === 2)
    console.log('scissors')
  }
  console.log(getComputerChoice(comChoice))

  let humChoice = prompt('Make your choice').toLowerCase()
function getHumanChoice() {
    return(humChoice)
    
}
console.log(getHumanChoice(humChoice))