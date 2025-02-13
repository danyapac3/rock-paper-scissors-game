function playRound(human, computer) {
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

  if (winner === 'draw') {
    console.log(`Draw! You both choose ${human}!`);
  } 
  else if (winner === 'human') {
    console.log(`You won! ${human.at(0).toUpperCase() + human.slice(1)} beats ${computer}!`);
  }
  else {
    console.log(`You lose! ${computer.at(0).toUpperCase() + computer.slice(1)} beats ${human}!`);
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

function getHumanChoice() {
  while (true) {
    const msg = `Enter one "Rock", "Paper" or "Scissors"`;
    let answer = prompt(msg);
    if (answer === null) continue;
    let choice = answer.toLowerCase();
    
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    }
  }
}

function main() {
  let humanScore = 0;
  let computerScore = 0;
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  const winner = playRound(humanSelection, computerSelection);
  if (winner === 'computer') computerScore++;
  else if (winner === 'human') humanScore++;
  console.log('human: ' + humanScore);
  console.log('computer: ' + computerScore);
}

main();