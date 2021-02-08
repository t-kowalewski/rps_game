// Elements
const startGameBtn = document.getElementById('start-game-btn');

// Data
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'Draw';
const RESULT_PLAYER_WINS = 'Player Wins';
const RESULT_COMPUTER_WINS = 'Computer Wins';

let gameIsRunning = false;

// Logic - Input & Winner
const getUserChoice = () => {
  let selection = prompt('Rock, Paper or Scissors?', '');

  try {
    selection = selection.toLowerCase();
  } catch (error) {
    console.log(error);
    alert(`Empty input. We choose default value "${DEFAULT_USER_CHOICE}"`);
    return DEFAULT_USER_CHOICE;
  }

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice. We choose default value "${DEFAULT_USER_CHOICE}"`);
    return DEFAULT_USER_CHOICE;
  } else {
    return selection;
  }
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (pChoice, cChoice) => {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

// Listeners
startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }

  console.log('Starting game!');
  gameIsRunning = true;
  const playerChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  let message = `You had ${playerChoice} and computer had ${computerChoice}. `;
  if (winner === RESULT_DRAW) {
    message += RESULT_DRAW;
  } else if (winner === RESULT_PLAYER_WINS) {
    message += RESULT_PLAYER_WINS;
  } else {
    message += RESULT_COMPUTER_WINS;
  }

  alert(message);
  console.log(
    `Player choice: ${playerChoice}; Computer choice: ${computerChoice} => Result: ${winner}`
  );

  gameIsRunning = false;
});
