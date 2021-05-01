let score=0;
const rows = 8;
const cells = 8;
const items= rows*cells;

//main game field element
const gameElement = document.getElementById('game');
const scoreElement = document.getElementById('score');

let icons=['fa-cannabis',
'fa-certificate',
'fa-canadian-maple-leaf',
'fa-cloud-sun',
'fa-cloud-moon-rain',
'fa-cookie',
'fa-cookie-bite',
'fa-cloud-sun',
'fa-chess',
'fa-spider',
'fa-crow',
'fa-dog',
'fa-dove',
'fa-paw',
'fa-feather-alt',
'fa-fish',
'fa-seedling',
'fa-umbrella',
'far fa-frog',
'fad fa-apple-alt',
'fad fa-mountain',
'fad fa-bus-alt',
'fas fa-bus',
'fad fa-car',
'fad fa-lea',
'fad fa-heart',
'fad fa-landmark', 
' fad fa-truck', 
 ' fad fa-store ',
'fad fa-igloo' ,         
'fad fa-money-check-alt',
'fad fa-truck-monster',
'fad fa-ghost',
'fas fa-puzzle-piece',
'fad fa-chess-pawn',
];

function showActiveCards() {
    for (let i = 0; i < items; i++) {
      if (activeCards[i]) {
        let element = cards[i];
        element.classList.add('flipped');
      }
    }
  }
  function refreshGrid() {
    //clear game
    gameElement.innerHTML = '';
    // dynamically create rows with cells
    let itemCounter = 0;
    for (let i = 0; i < items; i++) {
      const newCell = document.createElement('div');
      newCell.className = 'card active';
      newCell.innerText = itemCounter++;
      gameElement.appendChild(newCell);
    }
  }
  function hideActiveCards() {
    for (let i = 0; i < items; i++) {
      if (activeCards[i]) {
        let element = cards[i];
        element.classList.remove('flipped');
      }
    }
  }
  function increaseScore() {
    score++;
    scoreElement.innerText = 'SCORE: ' + score;
  }
  function assignClicks() {
    let blocks = document.getElementsByClassName('card');
    for (let i = 0; i < blocks.length; i++) {
      const element = blocks[i];
      cards[i] = element;
      element.addEventListener('click', () => clickHandler(i));
    }
  }
  function chooseRandomCards(count) {
    for (let i = 0; i < count; i++) {
      let newIndex = getRandomInt(items);
      activeCards[newIndex] = true;
    }
  }
  function generateLevel () {
    cards = [];
    activeCards = [];
    refreshGrid();
    assignClicks();
    //select random buttons
    chooseRandomCards(5);
    // Show & hide them
    showActiveCards();
    setTimeout(hideActiveCards, 7 * 1000);
  }
  function clickHandler(i) {
    element = cards[i];
    if (!activeCards[i]) return;
    element.classList.toggle('flipped');
    increaseScore();
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
generateLevel();