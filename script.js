const rockImage = document.getElementById('rock');
const paperImage = document.getElementById('paper');
const scissorsImage = document.getElementById('scissors');
const resultParagraph = document.getElementById('result');
const scoreParagraph = document.getElementById('score');

let userScore = 0;
let computerScore = 0;

rockImage.addEventListener('click', () => playRound('rock'));
paperImage.addEventListener('click', () => playRound('paper'));
scissorsImage.addEventListener('click', () => playRound('scissors'));

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(result, userChoice, computerChoice);
  updateScore(result);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie!';
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function displayResult(result, userChoice, computerChoice) {
  resultParagraph.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

function updateScore(result) {
  if (result === 'You win!') {
    userScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }
  scoreParagraph.textContent = `You: ${userScore} - Computer: ${computerScore}`;
}