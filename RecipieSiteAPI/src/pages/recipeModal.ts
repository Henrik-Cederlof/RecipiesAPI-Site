import { Meal } from '../types';
import  getMealIngredients  from '../funtions/getMealIngredients';
import './recipesModal.scss';
import getFlag from '../funtions/getFlag';
import { toggleFavItem, isFav } from '../funtions/favoritesHandling';
import {displayFavorites} from './recipes';


const createModal = (mealDetails: Meal) => {
    const countryFlag = getFlag(mealDetails.strArea);
    // Skapa modal
    const modal = document.createElement('div') as HTMLDivElement;
    modal.classList.add('recipe-modal');

    //Kontrollera om receptet är favorit
    const isFavorite = isFav(mealDetails.idMeal);
    const favoriteIcon = isFavorite ? '⭐' : '☆';

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
        <div class="modal-flag-container" title="${mealDetails.strArea}">
        <button class="favorite-btn">${favoriteIcon}</button>
        <img class="modal-flag"  src="${countryFlag}" alt="Flag for ${mealDetails.strArea}">
        </div>
        </div>

        <div class="modal-img-ins-container">
        <img class="modal-img" src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
        <p class="modal-instructions">${mealDetails.strInstructions}</p>
        </div>
        <p class="ingredients-title">INGREDIENTS:</p>
        <ul class="modal-ingredients-list">
        ${ingredientsList}
        </ul>
        
        <button class="close-modal-btn">Close</button>

        </div>
    </div>`;

    //Lägg till innehållet i modalen
    modal.appendChild(modalContent);
    //Lägg till modalen i body
    document.body.appendChild(modal);

    // Stäng modalen
    const closeModalBtn = document.querySelector('.close-modal-btn') as HTMLButtonElement;
    closeModalBtn.addEventListener('click', () => modal.remove());

    const favoriteBtn = document.querySelector('.favorite-btn') as HTMLButtonElement;
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const added = toggleFavItem(mealDetails);
        favoriteBtn.textContent = added ? '⭐' : '☆';
        displayFavorites();
    });

}

export default createModal;