import { recipeMenu } from './recipesMenu';
import { RecipeMenu } from '../types';
import { getMealDetails } from '../funtions/getRecipies';
import { getFavs } from '../funtions/favoritesHandling';
import createModal from './recipeModal';
import recipeCategories from '../misc/recipeMenu';
import  createSearchBar  from '../components/searchBar/searchBar';
import { searchContainer, searchBtn, searchField } from '../components/searchBar/searchBar';
import '../components/searchBar/searchBar.scss';
import './recipes.scss';


export const recipeComponent = () => {
    const mainContainer = document.createElement('div') as HTMLDivElement;
    mainContainer.id = 'main-recipes';

    // Huvudcontainer för både meny och receptvisning
    const menuContainer = document.createElement('div') as HTMLDivElement;
    menuContainer.id = 'menu-container';

    // Container för menyn
    const menu = document.createElement('div') as HTMLDivElement;
    menu.id = 'menu';
    const favorites = document.createElement('div') as HTMLDivElement;
    favorites.id = 'favorites';

    // Container för recepten
    const recipesDisplayContainer = document.createElement('div') as HTMLDivElement;
    recipesDisplayContainer.id = 'recipes-display';

    // Lägg till menyn och recepten i menu-container
    menuContainer.appendChild(recipeMenu(recipesDisplayContainer));
    menuContainer.appendChild(recipesDisplayContainer);
    menuContainer.appendChild(favorites);
    createSearchBar(mainContainer);
 
    searchBtn.addEventListener('click', () => {
        const searchWord = searchField.value.trim();
        // Om sökfältet inte är tomt
        if(searchWord) {
            recipesDisplayContainer.innerHTML = '';
            suggesttionList.innerHTML = '';

            // Hämta recepten med sökordet
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals) {
                    data.meals.forEach((meal: { strMeal: string, idMeal: string }) => {
                        const mealId = meal.idMeal;
                        displayRecipes(mealId, recipesDisplayContainer);
                    });
                } else {
                    console.error('No meals found with search word:', searchWord);
                }
            });
        }
    });

    searchContainer.appendChild(searchField);
    searchContainer.appendChild(searchBtn);
    mainContainer.appendChild(searchContainer);

    // Lägg till menuContainer i mainContainer
    mainContainer.appendChild(menuContainer);

    // Förslag på sökt recept
    const suggesttionList = document.createElement('ul') as HTMLUListElement;
    suggesttionList.id = 'suggestion-list';
    searchContainer.appendChild(suggesttionList);

    // Eventlyssnare för sökfältet
    searchField.addEventListener('input', () => {
        const searchWord = searchField.value.trim();

        //Sökfält tomt, ta bort förslag
        if(!searchWord) {
            suggesttionList.innerHTML = '';
            return;
        }

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`)
        .then(response => response.json())
        .then(data => {
            suggesttionList.innerHTML = '';

            if(data.meals) {
                // Visa de 5 första recepten
                const topMeals = data.meals.slice(0, 5); 
                topMeals.forEach((meal: { strMeal: string, idMeal: string }) => {
                    const liItem = document.createElement('li') as HTMLLIElement;
                    liItem.textContent = meal.strMeal;

                    // Eventlyssnare för att visa receptet
                    liItem.addEventListener('click', () => {
                        const mealId = meal.idMeal;
                        displayRecipes(mealId, recipesDisplayContainer);
                        searchField.value = meal.strMeal;
                        suggesttionList.innerHTML = '';
                    });
                    suggesttionList.appendChild(liItem);
                });
            } else {
                const notFound = document.createElement('li') as HTMLLIElement;
                notFound.innerHTML = 'No meals found';
                suggesttionList.appendChild(notFound);
            }
            });

    });

    const displayRecipes = async (mealId: string, recipesDisplayContainer: HTMLDivElement) => {
        recipesDisplayContainer.innerHTML = '';
        // Vi hämtar recepten med mealId.
        const mealDetails = await getMealDetails(mealId);
        // Om vi får tillbaka receptet = true
        if(mealDetails) {

            // Hitta ikonen för kategorin
            const category = mealDetails.strCategory.toLocaleLowerCase();
            const selectedCategory = recipeCategories.find((menuItem: RecipeMenu) => menuItem.id === category);
            const categoryIcon = selectedCategory ? selectedCategory.icon : 'No image';

            // Skapa modalen
            const mealCard = document.createElement('div') as HTMLDivElement;

            mealCard.classList.add('meal-card');

            // Skapa kortet
            mealCard.innerHTML = `
            <img class="meal-img" src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
            <h2 class="meal-title">${mealDetails.strMeal.slice(0,25)}</h2>
            <p class="meal-category">${categoryIcon}</p>
            `;

        
            // Eventlyssnare för att visa receptet
            mealCard.addEventListener('click', async () => {
                createModal(mealDetails);
            });

            recipesDisplayContainer.appendChild(mealCard);
        // Om vi inte får tillbaka receptet = false
        } else {
            console.error('No meal with ID:', mealId);
        }
    };

    return mainContainer;
};


export const displayFavorites = () => {
     const favoritesContainer = document.getElementById('favorites') as HTMLDivElement;
        favoritesContainer.innerHTML = '<h3>Favorites</h3>';
        const favoritesList = getFavs();
        if(favoritesList.length === 0) {
            favoritesContainer.innerHTML = '<p>No favorites yet</p>';
            return;
        }
        favoritesList.forEach((meal) => {
            const mealCard = document.createElement('div') as HTMLDivElement;
            mealCard.classList.add('favorite-card');
            mealCard.innerHTML = `
            <img class="meal-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            `;
            mealCard.addEventListener('click', () => {
                createModal(meal);
            });
            favoritesContainer.appendChild(mealCard);
        });
        
    };

// Lägg till favoriter
document.addEventListener("DOMContentLoaded", displayFavorites);
