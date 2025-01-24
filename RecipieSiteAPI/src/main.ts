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
import { recipieComponent } from './pages/recipes';
import  { getAllMeals, getFullMealInfo }  from './funtions/getRecipies';


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
  cardContainer.appendChild(createCardComp(cardData))
}
if (aboutMain) {
  aboutMain.appendChild(aboutUsContainer);
}

if (recipesMain) {
  recipesMain.appendChild(recipieComponent());
}








