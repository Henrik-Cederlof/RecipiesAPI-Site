
import "./searchBar.scss";
export const searchContainer = document.createElement('div') as HTMLDivElement;
export const searchField = document.createElement('input') as HTMLInputElement;
export const searchBtn = document.createElement('button') as HTMLButtonElement;

const createSearchBar = (container: HTMLElement) => {
    // Skapa sökfältets container
    searchContainer.classList.add('search-container');

    // Skapa sökfältet
    searchField.type = 'text';
    searchField.id = 'search-field';
    searchField.placeholder = 'Search for recipies';

    // Skapa sökknappen
    searchBtn.type = 'button';
    searchBtn.id = 'search-btn';
    searchBtn.textContent = 'Search';

    // Lägg till sökfält och knapp i container
    searchContainer.appendChild(searchField);
    searchContainer.appendChild(searchBtn);

    // Lägg till sökfältet i container
    container.appendChild(searchContainer);
};

export default createSearchBar;


