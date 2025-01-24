import { CardData } from "./types";


export const createCardComp = (data: CardData[]): HTMLDivElement => {
  const cardContainer = document.createElement('section') as HTMLDivElement;
  cardContainer.classList.add('card-container');

  cardContainer.innerHTML = data.map((item, index) => `
    <div class="card" id="card-${index}">
      <div class="card-image" style="background-image: url(${item.image})"></div>
      <div class="card-content">
        <h2 class="card-title">${item.title}</h2>
        <p class="card-description">${item.descrtipion}</p>
        <button class="card-button">Read More</button>
      </div>
    </div>
      `
    )
    .join('');
    cardContainer.querySelectorAll('.card-button').forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = (event.target as HTMLElement).getAttribute('data-index');
        console.log(`Card ${index} clicked`);
      });
    });
    return cardContainer;
};
