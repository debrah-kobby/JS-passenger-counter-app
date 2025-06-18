let firstCard = 17;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardsOuput = "1st Card - " + firstCard + ", " + "2nd Card - " + secondCard;

function startGame() {
  if (sum <= 20) {
    message = "Do u want to draw another card";
  } else if (sum === 21) {
    message = "Wohooo! You got BlackJack";
    hasBlackJack = true;
  } else {
    message = "Youre out of the Game";
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cardsOuput;
  messageEl.textContent = message;
}

function resetBtn() {
  message = "Want to play a round?";

  hasBlackJack = false;
  isAlive = true;
  messageEl.textContent = message;
  cardsEl.textContent = "Cards: 0";
  sumEl.textContent = "Sum: 0";
}
