import './globalStyles.scss';
import './style.scss';
import './components/_heroComponent.scss';
import './components/_findTasteComponent.scss';
import './components/_loader.scss';

import createBtns from './menyButtons';
import { cardData } from './cardData';
import { createCardComp }  from './findTasteComponent';
import { createHeroComponent } from './heroComponent';
import { DomElements } from './domElements';
import { aboutUsContainer } from './aboutUs';
import { recipeComponent } from './pages/recipes';


const header = DomElements.header;


const main = DomElements.main;
  const heroContainer = DomElements.main;
  const cardContainer = DomElements.main;

const aboutMain = DomElements.aboutMain;

const recipesMain = DomElements.recipesMain;




if(header) {
  createBtns();
}

if (main) { 
  heroContainer.appendChild(createHeroComponent());  
  createCardComp(cardData).then(card => {
    cardContainer.appendChild(card);
  });
}
if (aboutMain) {
  aboutMain.appendChild(aboutUsContainer);
}

if (recipesMain) {
  recipesMain.appendChild(recipeComponent());
}








