function addCardsMain(cards) {
  const appContainer = document.querySelector('.app-container');
  const container = document.createElement('div');
  container.classList.add('container');
  container.classList.add('main-container');
  for (let i = 0; i < cards[0].length; i += 1) {
    const img = document.createElement('img');
    const mainCards = document.createElement('a');
    mainCards.classList.add('main-card');
    mainCards.classList.add('green');
    mainCards.setAttribute('data-action', cards[0][i]);
    img.src = cards[i + 1][1].image;
    mainCards.append(img);
    mainCards.innerHTML += cards[0][i];
    container.append(mainCards);
  }
  appContainer.append(container);
}

export default addCardsMain;
