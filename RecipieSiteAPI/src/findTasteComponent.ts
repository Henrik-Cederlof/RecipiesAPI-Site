import { CardData } from "./types";
import  getMeal  from "./funtions/getMeal";



export const createCardComp = async (data: CardData[]): Promise<HTMLDivElement> => {
  const cardContainer = document.createElement('section') as HTMLDivElement;
  cardContainer.classList.add('card-container');

  const getMeals = data.map(async (item, index) => {
    const meal = await getMeal();
    return { 
      ...item, 
      image: meal.strMealThumb,
      title: meal.strMeal,
      descrtipion: meal.strInstructions,
      index: index
     };
  });

  const meals = await Promise.all(getMeals);

  cardContainer.innerHTML = meals.map((meal) => `
    <div class="card" id="card-${meal.index}">
      <div class="card-image" style="background-image: url(${meal.image})"></div>
      <div class="card-content">
        <h2 class="card-title">${meal.title}</h2>
        <p class="card-description">${meal.descrtipion}</p>
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


