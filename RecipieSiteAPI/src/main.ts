import './style.scss';
import './components/_heroComponent.scss';
import ctaGoBtn from './animations/ctaGoBtn';

import getMeal from './funtions/getMeal';

import createBtns from './menyButtons';
import  { createCard }  from './findTasteComponent';
import { createHeroComponent } from './heroComponent';
import { get } from 'http';

const main = document.getElementById('main') as HTMLDivElement;

if (main) {
  const heroComponent = createHeroComponent();
  const card = createCard();
  main.appendChild(heroComponent);
  main.appendChild(card);
}
createBtns();
getMeal();

ctaGoBtn('1.5s', '#526d2d', 'white', 'right', 50);

