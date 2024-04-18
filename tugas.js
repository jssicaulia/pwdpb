let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('.guess-feedback');
let guessField = document.getElementById('guessField');
let guessSubmit = document.getElementById('guessButton');

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Tebakan sebelumnya: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guesses.textContent += 'You got it!';
  } else if (guessCount === 10) {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guesses.textContent = '!!!GAME OVER!!!';
  } else {
    guessCount++;
    if (userGuess < randomNumber) {
      guesses.textContent += 'Terlalu rendah!';
    } else if (userGuess > randomNumber) {
      guesses.textContent += 'Terlalu tinggi!';
    }
  }
}

guessSubmit.addEventListener('click', checkGuess);

resetButton = document.createElement('button');
resetButton.textContent = 'Start new game';
document.body.append(resetButton);
resetButton.addEventListener('click', resetGame);

function resetGame() {
  guessCount = 1;
  let resetParas = document.querySelectorAll('.results p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guesses.textContent = 'Tebakan sebelumnya: ';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function selectColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function computerRandomChoice() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
  const computerChoice = colors[Math.floor(Math.random() * colors.length)];
  const computerChoiceEl = document.getElementById('computerChoice'); // Assuming you have an element with id "computerChoice" to display the choice
  computerChoiceEl.textContent = "Computer - " + computerChoice;
  document.body.style.backgroundColor = selectColor(); // Assuming you want to change the background color of the body
}
