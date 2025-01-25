import { recipeMenu } from './recipesMenu';
import './recipes.scss';



export const recipieComponent = () => {
    const mainContainer = document.createElement('div') as HTMLDivElement;
    mainContainer.id = 'main-recipes';

    // Huvudcontainer för både meny och receptvisning
    const menuContainer = document.createElement('div') as HTMLDivElement;
    menuContainer.id = 'menu-container';

    // Container för menyn
    const menu = document.createElement('div') as HTMLDivElement;
    menu.id = 'menu';

    // Container för recepten
    const recipesDisplayContainer = document.createElement('div') as HTMLDivElement;
    recipesDisplayContainer.id = 'recipes-display';

    // Lägg till menyn och recepten i menu-container
    menuContainer.appendChild(recipeMenu(recipesDisplayContainer)); // Skickar med recept-containern
    menuContainer.appendChild(recipesDisplayContainer);

    // Lägg till sökfältet överst
    const searchContainer = document.createElement('div') as HTMLDivElement;
    searchContainer.id = 'search-container';

    const searchField = document.createElement('input') as HTMLInputElement;
    searchField.id = 'search-field';
    searchField.placeholder = 'Search for recipes';

    const searchBtn = document.createElement('button') as HTMLButtonElement;
    searchBtn.id = 'search-btn';

    searchContainer.appendChild(searchField);
    searchContainer.appendChild(searchBtn);
    mainContainer.appendChild(searchContainer);

    // Lägg till menuContainer i mainContainer
    mainContainer.appendChild(menuContainer);

    return mainContainer;
};

