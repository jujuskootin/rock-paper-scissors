const comChoice = Math.floor(Math.random() * 3) 
function getComputerChoice() {
  if (comChoice === 0)
    console.log('Rock')
  else if (comChoice === 1)
    console.log('Paper')
  else if (comChoice === 2)
    console.log('Scissors')
  }
  console.log(getComputerChoice(comChoice))

