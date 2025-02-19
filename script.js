function getWinner(human, computer) {
  let winner = 'human';
  switch(human) {
    case 'rock':
      if (computer === 'rock') winner = 'draw';
      else if (computer === 'paper') winner = 'computer';
      else if (computer === 'scissors') winner = 'human';
      break;
    case 'paper':
      if (computer === 'rock') winner = 'human';
      else if (computer === 'paper') winner = 'draw';
      else if (computer === 'scissors') winner = 'computer';
      break;
    case 'scissors':
      if (computer === 'rock') winner = 'computer';
      else if (computer === 'paper') winner = 'human';
      else if (computer === 'scissors') winner = 'draw';
      break;
  }

  return winner;
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch(choice) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

const possibleSeletions = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

let humanOptions = document.querySelector(".human-section .options");
humanOptions.addEventListener('click', (e) => {
  const humanSelection = e.target.parentElement.id;
  if (!possibleSeletions.includes(humanSelection)) {
    return;
  }
  const computerSelection = getComputerChoice();
  const winner = getWinner(humanSelection, computerSelection);
  if (winner === 'human') humanScore++;
  else if (winner === 'computer') computerScore++; 
  console.log(winner);
});