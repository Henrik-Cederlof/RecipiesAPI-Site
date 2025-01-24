import {  RecipeMenu, Meal } from '../types';
import { getFullMealInfo, getMealDetails } from '../funtions/getRecipies';
import createModal from './recipeModal';


const recipeCategories: RecipeMenu[] = [
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'starter', name: 'Starter', icon: '🥗' },
    { id: 'side', name: 'Side', icon: '🍛' },
    { id: 'miscellaneous', name: 'Miscellaneous', icon: '🍽️' },
    { id: 'beef', name: 'Beef', icon: '🥩' },
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'lamb', name: 'Lamb', icon: '🐑' },
    { id: 'pork', name: 'Pork', icon: '🐽' },
    { id: 'goat', name: 'Goat', icon: '🐐' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'seafood', name: 'Seafood', icon: '🐟' },
    { id: 'vegan', name: 'Vegan', icon: '🌱' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥕' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' },
];
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
        <h2 class="meal-title">${meal.strMeal}</h2>
        <button class="details-btn" data-id="${meal.idMeal}">Show Recipe</button>
        <p class="meal-category">${categoryIcon}</p>
        `;
        // Eventlyssnare för att visa receptet
        const detailsBtn = mealCard.querySelector('.details-btn') as HTMLButtonElement;
        detailsBtn.addEventListener('click', async () => {
            try {
                const mealDetails = await getMealDetails(meal.idMeal);
          
              if (mealDetails) {
                // Hämta fullständig information
                createModal(mealDetails);
              } else {
                console.error('No meal details found for id:', meal.idMeal);
              }
            } catch (error) {
              console.error('Error fetching meal details:', error);
            }
          });

        recipesDisplayContainer.appendChild(mealCard);
    });
};

export default recipeMenu;
