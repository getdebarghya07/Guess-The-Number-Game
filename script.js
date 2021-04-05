'use strict';
// HTML selectors
const checkButton = document.querySelector('.btn-check');
const checkGuess = document.querySelector('.guess');
const checkMessage = document.querySelector('.message');
const checkScore = document.querySelector('.score');
const checkNumber = document.querySelector('.number');
const checkAgain = document.querySelector('.btn-again');
console.log(checkButton);
console.log(checkGuess);

//Variables
let score = 20;
let highscore = 0;
// Functions
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  checkMessage.textContent = message;
};

// Event handlers
const handleCheck = e => {
  const guess = Number(checkGuess.value);
  console.log(guess);
  if (!guess) {
    displayMessage = '⛔ No number entered !!';
  } else if (guess === secretNumber) {
    displayMessage('🥳 Nice You cracked it ❕❕');
    // document.querySelector('body').style.backgroundImage =
    //   "url('maxresdefault.jpg')";
    //console.log(document.querySelector('body').style.backgroundImage);
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to right, #ffe000, #799f0c)';
    checkNumber.style.width = '30rem';
    checkNumber.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '😕 Your guess is too high ❕❕'
          : '🥱 Your guess is too low ❕❕'
      );

      score--;
      checkScore.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

const handleAgain = e => {
  score = 20;
  checkScore.textContent = score;
  checkMessage.textContent = 'Start guessing 🧐......';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  checkNumber.textContent = '?';
  checkGuess.value = '';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top, #f43b47 0%, #453a94 100%)';
  //console.log(document.querySelector('body').style.backgroundImage);
  checkNumber.style.width = '15rem';
  //console.log(checkScore.textContent);
};

// Event listener
checkButton.addEventListener('click', handleCheck);
checkAgain.addEventListener('click', handleAgain);
