/**
 * @return {string} 'human', 'computer' or 'draw';
 */
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

/**
 * @param {string} option - option you want to hightlight
 * @param {NodeList} elements
 */
function hightlightOption(option, elements) {
  elements.forEach((element) => {
    if (element.dataset.weapon === option) element.classList.add('highlighted');
    else element.classList.remove('highlighted');
  });
}

function endGame(msg) {
  popupText.textContent = msg; 
  popup.classList.remove('invisible');
}

function initGame() {
  humanScores = 0;
  computerScores = 0;
  roundNumber = 1;
  
  humanScoreBoard.textContent = `Scores: ${humanScores}`;
  computerScoreBoard.textContent = `Scores: ${computerScores}`;
  roundBoard.textContent = `Round ${roundNumber} of 5`;

  [...humanOptions, ...computerOptions].forEach((option) => {
    option.classList.remove('highlighted');
  });
}

const possibleSeletions = ['rock', 'paper', 'scissors'];

let humanScores = 0;
let computerScores = 0;
let roundNumber = 1;

const humanOptions = document.querySelectorAll('.human-section .option');
const humanScoreBoard = document.querySelector('.human-section .scores');
const computerOptions = document.querySelectorAll('.computer-section .option');
const computerScoreBoard = document.querySelector('.computer-section .scores');
const roundBoard = document.querySelector('.round-info');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup-text')
const popupButton = document.querySelector('.popup-button');

popupButton.addEventListener('click', (e) => {
  popup.classList.add('invisible');
  initGame()
});

humanOptions.forEach((option) => {
  option.addEventListener('click', ({currentTarget}) => {
    if (roundNumber === 5) {
      const msg = ( 
        (humanScores > computerScores) ? 'You won!' :
        (humanScores < computerScores) ? 'You lose!' :
        'Draw!') + ' Would you like to play again?';
      endGame(msg);
      return;
    }

    const humanSelection = currentTarget.dataset.weapon;
    const computerSelection = getComputerChoice();
    hightlightOption(humanSelection, humanOptions);
    hightlightOption(computerSelection, computerOptions);
    
    const winner = getWinner(humanSelection, computerSelection);
    if (winner === 'human') humanScores++;
    else if (winner === 'computer') computerScores++;

    humanScoreBoard.textContent = `Scores: ${humanScores}`;
    computerScoreBoard.textContent = `Scores: ${computerScores}`;

    roundNumber++;
    roundBoard.textContent = `Round ${roundNumber} of 5`;
  });
});
