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
    let choice = prompt(msg)?.toLowerCase();
    
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    }
  }
}