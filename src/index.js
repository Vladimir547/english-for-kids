import './style/main.css';
import cards from './components/cards';
import addCardsMain from './components/mainContent';
import addCards from './components/addCards';
import UpdateCard from './components/updateCard';

window.onload = function start() {
  addCardsMain(cards);
  addCards();
  let isGame = false;
  const gameContainer = document.querySelector('.game-container');
  const allDisplayCards = document.querySelectorAll('.card');
  gameContainer.style.display = 'none';
  const menu = document.querySelector('.menu');
  const mainCards = document.querySelector('.main-container');
  const menuItems = document.querySelectorAll('.header-item');
  const cardHeader = document.querySelectorAll('.card-header');
  const turn = document.querySelectorAll('.rotate');
  const headCard = document.querySelectorAll('.main-card');
  const overflowMenu = document.createElement('div');
  overflowMenu.className = 'overflow';
  const menuCheck = document.querySelector('.menu-check');
  const switchGame = document.querySelector('.switch-label');
  const button = document.querySelector('.btn');
  const allFront = document.querySelectorAll('.front');
  document.querySelector('.switch-input').checked = true;
  const audio = document.querySelector('.audio');
  const rating = document.querySelector('.rating');
  let openMenu = false;
  menuCheck.checked = false;
  menu.addEventListener('click', (event) => {
    /*event.preventDefault();*/
    const target = event.target.closest('a');
    if (!target) {
      return;
    }
    mainCards.style.display = 'none';
    gameContainer.style.display = 'flex';
    let numFromArr = null;
    if (target.innerHTML === 'Action (set A)') {
      numFromArr = 1;
    }
    if (target.innerHTML === 'Action (set B)') {
      numFromArr = 2;
    }
    if (target.innerHTML === 'Action (set C)') {
      numFromArr = 3;
    }
    if (target.innerHTML === 'Adjective') {
      numFromArr = 4;
    }
    if (target.innerHTML === 'Animal (set A)') {
      numFromArr = 5;
    }
    if (target.innerHTML === 'Animal (set B)') {
      numFromArr = 6;
    }
    if (target.innerHTML === 'Clothes') {
      numFromArr = 7;
    }
    if (target.innerHTML === 'Emotion') {
      numFromArr = 8;
    }
    if (target.innerHTML !== 'Main Page') {
      UpdateCard(numFromArr);
    } else {
      mainCards.style.display = 'flex';
      gameContainer.style.display = 'none';
    }
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.add('active');
    openMenu = !openMenu;
    menuCheck.checked = false;
    overflowMenu.remove();
  });
  menuCheck.addEventListener('click', () => {
    openMenu = !openMenu;
    if (openMenu) {
      document.body.append(overflowMenu);
    } else {
      overflowMenu.remove();
    }
  });
  overflowMenu.addEventListener('click', () => {
    openMenu = !openMenu;
    overflowMenu.remove();
    menuCheck.checked = false;
  });
  mainCards.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) {
      return;
    }
    let numFromArr = null;
    if (target.dataset.action === 'Action (set A)') {
      numFromArr = 1;
    }
    if (target.dataset.action === 'Action (set B)') {
      numFromArr = 2;
    }
    if (target.dataset.action === 'Action (set C)') {
      numFromArr = 3;
    }
    if (target.dataset.action === 'Adjective') {
      numFromArr = 4;
    }
    if (target.dataset.action === 'Animal (set A)') {
      numFromArr = 5;
    }
    if (target.dataset.action === 'Animal (set B)') {
      numFromArr = 6;
    }
    if (target.dataset.action === 'Clothes') {
      numFromArr = 7;
    }
    if (target.dataset.action === 'Emotions') {
      numFromArr = 8;
    }
    UpdateCard(numFromArr);
  });
  gameContainer.addEventListener('click', (e) => {
    const front = e.target.closest('.front');
    if (!front) {
      return;
    }
    if (!isGame) {
      for (let i = 1; i < cards.length; i += 1) {
        for (let j = 0; j < cards[i].length; j += 1) {
          if (cards[i][j].word === front.dataset.name) {
            audio.src = cards[i][j].audioSrc;
            audio.play();
            break;
          }
        }
      }
    }
    /*console.log(cards.length);*/
  });
  switchGame.addEventListener('click', () => {
    isGame = !isGame;
    if (isGame) {
      button.classList.remove('none');
      button.classList.remove('repeat');
      allDisplayCards.forEach((item) => {
        item.classList.add('card-cover');
      });
      cardHeader.forEach((item) => {
        item.classList.add('none');
      });
      turn.forEach((item) => {
        item.classList.add('none');
      });
      headCard.forEach((item) => {
        item.classList.remove('green');
      });
      menu.classList.remove('green');
    }
    if (!isGame) {
      button.classList.add('none');
      allDisplayCards.forEach((item) => {
        item.classList.remove('card-cover');
      });
      cardHeader.forEach((item) => {
        item.classList.remove('none');
      });
      turn.forEach((item) => {
        item.classList.remove('none');
      });
      headCard.forEach((item) => {
        item.classList.add('green');
      });
      menu.classList.add('green');
    }
    /*console.log(isGame);*/
  });
  button.addEventListener('click', (e) => {
    let newArr = null;
    let index = 0;
    let isWin = true;
    let mistakes = 0;
    const repeat = e.target.classList.contains('repeat');
    rating.classList.remove('none');
    for (let i = 1; i < cards.length; i += 1) {
      for (let j = 0; j < cards[i].length; j += 1) {
        if (cards[i][j].word === allFront[0].dataset.name) {
          newArr = cards[i];
          break;
        }
      }
    }
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    const shuffleArr = shuffle(newArr);
    if (!repeat) {
      button.classList.add('repeat');
      audio.src = shuffleArr[index].audioSrc;
      /*allFront */
      audio.play();
      allFront.forEach((item) => {
        item.addEventListener('click', (event) => {
          const star = document.createElement('div');
          const fontStar = document.createElement('i');
          if (event.target.dataset.name === shuffleArr[index].word) {
            audio.src = 'src/audio/correct.mp3';
            audio.play();
            event.target.classList.add('inactive');
            star.classList.add('star-succes');
            fontStar.classList.add('fas');
            index += 1;
            if (index < shuffleArr.length) {
              setTimeout(() => {
                audio.src = shuffleArr[index].audioSrc;
                audio.play();
              }, 700);
            }
          } else {
            isWin = false;
            fontStar.classList.add('far');
            star.classList.add('star-error');
            audio.src = 'src/audio/error.mp3';
            audio.play();
            mistakes += 1;
          }
          fontStar.classList.add('fa-star');
          star.append(fontStar);
          rating.append(star);
          const gameResualt = document.createElement('div');
          const text = document.createElement('div');
          const wrap = document.createElement('div');
          gameResualt.className = 'result';
          if (index >= shuffleArr.length) {
            if (isWin && index === shuffleArr.length) {
              setTimeout(() => {
                audio.src = '/src/audio/success.mp3';
                audio.play();
                gameResualt.classList.add('result-good');
                text.className = 'result-text';
                text.innerText = 'Excellent!';
              }, 1100);
            } else {
              setTimeout(() => {
                audio.src = '/src/audio/failure.mp3';
                audio.play();
              }, 1100);
              text.innerText = `you made ${mistakes} mistakes`;
              gameResualt.classList.add('result-lose');
              text.classList.add('lose-text');
            }
            wrap.append(text);
            wrap.append(gameResualt);
            document.body.append(wrap);
            allFront.forEach((el) => {
              el.classList.remove('inactive');
            });
            button.classList.remove('repeat');
          }
          setTimeout(() => wrap.remove(), 3000);
        });
      });
    }
  });
};
