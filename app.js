// Ui Variables
const check = document.querySelector('#check');
const restart = document.querySelector('#restart');
const alert = document.querySelector('#show-alert');
const history = document.querySelector('#history ul');
const guess = document.querySelector('#guess');
let correctNumber;

//Hepler Functions
function startGame() {
  correctNumber = Math.floor(Math.random() * 100) + 1;
}

function addItToHistory(number) {
  history.innerHTML =
    `
        <div class='list-group-item text-center'>You guessed ${number}</div>
    ` + history.innerHTML;
}

function setAlert(msg, type) {
  alert.innerHTML = `
        <div class='alert alert-${type} my-3 text-center'>${msg}</div>
    `;
}

function removeAlert() {
  alert.innerHTML = '';
}

function stopGame() {
  check.setAttribute('disabled', true);
  guess.setAttribute('disabled', true);
}

//Event Listeners
check.addEventListener('click', (e) => {
  if (guess.value) {
    const numberGuess = +guess.value;
    if (numberGuess > correctNumber) {
      guess.value = '';
      setAlert('Your guess is too high!', 'warning');
      setTimeout(removeAlert, 2000);
      addItToHistory(numberGuess);
    } else if (numberGuess < correctNumber) {
      guess.value = '';
      setAlert('Your guess is too low!', 'warning');
      setTimeout(removeAlert, 2000);
      addItToHistory(numberGuess);
    } else {
      setAlert('You guessed it, congratulations!', 'success');
      guess.value = '';
      stopGame();
    }
  } else {
    setAlert('Please enter a value!', 'danger');
    setTimeout(removeAlert, 1000);
  }
});

restart.addEventListener('click', () => {
  window.location.reload();
});

startGame();
