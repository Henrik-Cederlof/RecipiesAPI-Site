import './style.scss';
import './components/_heroComponent.scss';
import './components/_findTasteComponent.scss';

import ctaGoBtn from './animations/ctaGoBtn';
import getMeal from './funtions/getMeal';
import createBtns from './menyButtons';
import { getCategories, getAllImages } from './funtions/getCategories';
import { cardData } from './cardData';
import { createCard }  from './findTasteComponent';
import { createHeroComponent } from './heroComponent';
import { DomElements } from './domElements';
const main = DomElements.main;
const heroComponent = createHeroComponent();


if (main) {
  createBtns();
  getAllImages();
  main.appendChild(heroComponent);  
  createCard(cardData, 'card-container')

  

}



ctaGoBtn('1.5s', '#526d2d', 'white', 'right', 50);

