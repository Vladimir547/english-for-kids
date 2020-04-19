import cards from './cards';

function addCards(num = 1) {
  const appContainer = document.querySelector('.app-container');
  const container = document.createElement('div');
  const containerBtn = document.createElement('div');
  const btn = document.createElement('button');
  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.classList.add('none');
  containerBtn.classList.add('btns');
  btn.classList.add('btn');
  btn.classList.add('none');
  btn.innerHTML = 'Start game';
  container.classList.add('container');
  container.classList.add('game-container');
  container.append(rating);
  for (let i = 0; i < cards[num].length; i += 1) {
    const gameCards = document.createElement('div');
    const frontCardText = document.createElement('div');
    const backCardText = document.createElement('div');
    const fronCard = document.createElement('div');
    const backCard = document.createElement('div');
    const rotate = document.createElement('div');
    rotate.classList.add('rotate');
    gameCards.classList.add('card');
    fronCard.classList.add('front');
    backCard.classList.add('back');
    fronCard.style.backgroundImage = `url(${cards[num][i].image})`;
    backCard.style.backgroundImage = `url(${cards[num][i].image})`;
    frontCardText.classList.add('card-header');
    frontCardText.innerHTML = cards[num][i].word;
    backCardText.classList.add('card-header');
    backCardText.innerHTML = cards[num][i].translation;
    fronCard.append(frontCardText);
    backCard.append(backCardText);
    gameCards.append(fronCard);
    gameCards.append(backCard);
    gameCards.append(rotate);
    container.append(gameCards);
  }
  const audio = document.createElement('audio');
  audio.classList.add('audio');
  const audioEffect = document.createElement('audio');
  audioEffect.classList.add('soundEffects');
  containerBtn.append(btn);
  container.append(containerBtn);
  container.append(audio);
  container.append(audioEffect);
  appContainer.append(container);
  const card = document.querySelectorAll('.card');
  card.forEach((item) => {
    item.addEventListener('click', (event) => {
      if (event.target.closest('.rotate')) {
        item.classList.add('translate');
      }
    });
    item.addEventListener('mouseout', (e) => {
      if (e.target.closest('.back')) {
        item.classList.remove('translate');
      }
    });
  });
}

export default addCards;
