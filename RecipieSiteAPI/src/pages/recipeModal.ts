import { Meal } from '../types';
import  getMealIngredients  from '../funtions/getMealIngredients';
import './recipesModal.scss';
import { get } from 'http';
import { getMealDetails } from '../funtions/getRecipies';
import getFlag from '../funtions/getFlag';


const createModal = (mealDetails: Meal) => {
    const countryFlag = getFlag(mealDetails.strArea);
    // Skapa modal
    const modal = document.createElement('div') as HTMLDivElement;
    modal.classList.add('recipe-modal');
    
    // Skapa en Bakgrund
    const modalBG = document.createElement('div') as HTMLDivElement;
    modalBG.classList.add('modal-bg');
    modal.appendChild(modalBG);

    // Innehåll
    const modalContent = document.createElement('div') as HTMLDivElement;
    modalContent.classList.add('modal-content');
    // Ingredienser
    const ingredientsList = getMealIngredients(mealDetails)
    .map(ing => `<li>${ing.measure} ${ing.ingredient}</li>`)
    .join('');

    // Alla Detaljer om receptet
    modalContent.innerHTML = `
    <div class="modal-overlay">
        <div class="recipe-modal">
        <div class="modal-header">
        <h2 class="modal-title">${mealDetails.strMeal}</h2>
        <div class="modal-flag-container">
            <img class="modal-flag" src="${countryFlag}" alt="Flag for ${mealDetails.strArea}">
            </div>
        </div>

        <div class="modal-img-ins-container">
        <img class="modal-img" src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
        <p class="modal-instructions">${mealDetails.strInstructions}</p>
        </div>
        <p class="ingredients-title">Ingredients:</p>
        <ul class="modal-ingredients-list">
        ${ingredientsList}
        </ul>

        <button class="close-modal-btn">X</button>
        </div>
    </div>
`;

    //Lägg till innehållet i modalen
    modal.appendChild(modalContent);
    //Lägg till modalen i body
    document.body.appendChild(modal);

    // Stäng modalen
    const closeModalBtn = document.querySelector('.close-modal-btn') as HTMLButtonElement;
    closeModalBtn.addEventListener('click', () => {
        modal.remove();
    });
   

};

export default createModal;