import { CardData } from "./types";


export const createCard = (data: CardData[], containderId: string): void => {

  const container = document.getElementById(containderId) as HTMLDivElement;
  if (container) {
    data.forEach(index => {
     const card = document.createElement('div') as HTMLDivElement;
     card.classList.add('card');
     
     const cardImage = document.createElement('div') as HTMLDivElement;
      cardImage.classList.add('card-image');

      const cardTitle = document.createElement('h2') as HTMLDivElement;
      cardTitle.textContent = index.title;

      const cardText = document.createElement('article') as HTMLDivElement; 
      cardText.textContent = index.descrtipion;

      card.appendChild(cardTitle)
      card.appendChild(cardTitle)
      card.appendChild(cardImage)

      container.appendChild(card);
     
    });
  } else {
    console.error('Elementet kunde inte hittas..');
  }
}
