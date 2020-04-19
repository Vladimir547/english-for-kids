import cards from './cards';

function UpdateCard(num) {
  const main = document.querySelector('.main-container');
  const contain = document.querySelector('.game-container');
  const frontCard = document.querySelectorAll('.front');
  const frontCardTitle = document.querySelectorAll('.front .card-header');
  const backCard = document.querySelectorAll('.back');
  const backCardTitle = document.querySelectorAll('.back .card-header');
  main.style.display = 'none';
  contain.style.display = 'flex';
  for (let i = 0; i < frontCard.length; i += 1) {
    frontCard[i].setAttribute('data-name', cards[num][i].word);
    frontCardTitle[i].innerHTML = `${cards[num][i].word}`;
    frontCard[i].style.backgroundImage = `url(${cards[num][i].image})`;
    backCardTitle[i].innerHTML = `${cards[num][i].translation}`;
    backCard[i].style.backgroundImage = `url(${cards[num][i].image})`;
  }
}

export default UpdateCard;
