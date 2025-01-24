import { Meal } from '../types';
import './recipesModal.scss';

const createModal = (mealDetails: Meal) => {
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

    // Alla Detaljer om receptet
    modalContent.innerHTML = `
    <h2 class="modal-title">${mealDetails.strMeal}</h2>
    <img class="modal-img" src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
    <p class="modal-category">${mealDetails.strCategory}</p>
    <p class="modal-instructions">${mealDetails.strInstructions}</p>
    <p class="modal-ingredients">Ingredients:</p>
    <ul>
        <li>${mealDetails.strIngredient1}</li>

    </ul>
    <button class="close-modal-btn">Close</button>
    `;
    //Lägg till innehållet i modalen
    modal.appendChild(modalContent);
    //Lägg till modalen i body
    document.body.appendChild(modal);

    // Stäng modalen
    const closeModalBtn = document.querySelector('.close-modal-btn') as HTMLButtonElement;
    closeModalBtn.addEventListener('click', () => {
        modal.remove();
        console.log('Modal closed');
    });
   

};

export default createModal;