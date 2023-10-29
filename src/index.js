const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let pairsClicked = document.getElementById('pairs-clicked');
  let pairsGuessed = document.getElementById('pairs-guessed');

  let gameover = document.getElementById('game-over');
  gameover.style.display = 'none';

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card);
      card.classList.add('turned');

      if (memoryGame.pickedCards.length === 2) {
        const element0 = memoryGame.pickedCards[0];
        const element1 = memoryGame.pickedCards[1];

        const check = memoryGame.checkIfPair(
          element0.getAttribute('data-card-name'),
          element1.getAttribute('data-card-name')
        );

        if (!check) {
          memoryGame.pickedCards.forEach(pickedcard => {
            setTimeout(() => {
              pickedcard.classList.remove('turned');
            }, 500);
          });
        }

        memoryGame.pickedCards = [];
        pairsClicked.innerText = memoryGame.pairsClicked;
        pairsGuessed.innerText = memoryGame.pairsGuessed;

        if (memoryGame.checkIfFinished()) {
          memoryGame.gameOver();
        }
      }

      //if(memoryGame.checkIfFinished()){

      //}
    });
  });
});
