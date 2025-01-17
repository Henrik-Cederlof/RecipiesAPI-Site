import './style.scss';
import './components/_heroComponent.scss';
import './components/_findTasteComponent.scss';

import ctaGoBtn from './animations/ctaGoBtn';
import getMeal from './funtions/getMeal';
import createBtns from './menyButtons';
import { cardData } from './cardData';
import { createCard }  from './findTasteComponent';
import { createHeroComponent } from './heroComponent';

const main = document.getElementById('main') as HTMLDivElement;


if (main) {
  const heroComponent = createHeroComponent();

  main.appendChild(heroComponent);
  createCard(cardData, 'card-container')


  

}

createBtns();
getMeal();

ctaGoBtn('1.5s', '#526d2d', 'white', 'right', 50);

