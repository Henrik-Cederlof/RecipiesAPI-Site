import {  RecipeMenu, Meal } from '../types';
import { getFullMealInfo, getMealDetails } from '../funtions/getRecipies';
import createModal from './recipeModal';
import  recipeCategories  from '../misc/recipeMenu';


export const recipeMenu = (recipesDisplayContainer: HTMLDivElement) => {
    const menu = document.createElement('div') as HTMLDivElement;
    menu.id = 'menu';


    recipeCategories.forEach((recipe) => {
        const button = document.createElement('button') as HTMLButtonElement;
        button.classList.add('menu-button');
        button.innerHTML = `${recipe.icon} ${recipe.name}`;
        button.dataset.category = recipe.id;

        button.addEventListener('click', () => {
            createMealCards(recipe.id, recipesDisplayContainer);
        });

        menu.appendChild(button);
    });

    return menu;
};

const createMealCards = async (category: string, recipesDisplayContainer: HTMLDivElement) => { 
    recipesDisplayContainer.innerHTML = '';    
    const meals: Meal[] = await getFullMealInfo(category);

    // Hitta ikonen för kategorin
    const selectedCategory = recipeCategories.find((menuItem: RecipeMenu) => menuItem.id === category);
    const categoryIcon = selectedCategory ? selectedCategory.icon : '';


    meals.forEach((meal) => {
        const mealCard = document.createElement('div') as HTMLDivElement;
        mealCard.classList.add('meal-card');

        mealCard.innerHTML = `
        <img class="meal-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2 class="meal-title">${meal.strMeal.slice(0,25)}</h2>
        <p class="meal-category">${categoryIcon}</p>

        `;
        // Eventlyssnare för att visa receptet
        mealCard.addEventListener('click', async () => {
            
                const mealDetails = await getMealDetails(meal.idMeal);
          
              if (mealDetails) {
                // Hämta fullständig information
                createModal(mealDetails);
              } else {
                console.error('Inga recepet med ID:', meal.idMeal);
              }
                        
          });

        recipesDisplayContainer.appendChild(mealCard);
    });


};

export default recipeMenu;
