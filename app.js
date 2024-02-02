const cardArray = [
  { name: 'burguer', img: 'img/burguer.jpg' },
  { name: 'fries', img: 'img/fries.jpg' },
  { name: 'hotdog', img: 'img/hotdog.jpg' },
  { name: 'pankaces', img: 'img/pancakes.jpg' },
  { name: 'pie', img: 'img/pie.jpg' },
  { name: 'sandwich', img: 'img/sandwich.jpg' },
  { name: 'burguer', img: 'img/burguer.jpg' },
  { name: 'fries', img: 'img/fries.jpg' },
  { name: 'hotdog', img: 'img/hotdog.jpg' },
  { name: 'pankaces', img: 'img/pancakes.jpg' },
  { name: 'pie', img: 'img/pie.jpg' },
  { name: 'sandwich', img: 'img/sandwich.jpg' },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const messageDisplay = document.querySelector('#message');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'img/blank.svg');
    card.setAttribute('draggable', 'false');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const firstOption = cardsChosenIds[0];
  const secondOption = cardsChosenIds[1];

  if (firstOption == secondOption)
    messageDisplay.textContent = `You've clicked the same card!`;

  if (cardsChosen[0] == cardsChosen[1]) {
    messageDisplay.textContent = 'You found a match';
    cards[firstOption].setAttribute('src', 'img/white.jpg');
    cards[secondOption].setAttribute('src', 'img/white.jpg');
    cards[firstOption].removeEventListener('click', flipCard);
    cards[secondOption].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[firstOption].setAttribute('src', 'img/blank.svg');
    cards[secondOption].setAttribute('src', 'img/blank.svg');
    messageDisplay.textContent = 'Sorry, try again!';
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    messageDisplay.textContent = 'You won!';
    alert('You won!');
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 300);
  }
}

function restartGame() {
  document.location.reload();
}
