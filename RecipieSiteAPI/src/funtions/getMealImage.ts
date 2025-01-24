import getMeal from './getMeal';
import { DomElements } from '../domElements';
import { Meal } from '../types';

export const getMealImage = async () => {
    const meal = await getMeal() as Meal;
    DomElements.titleElement.textContent = meal.strMeal;
    DomElements.imageContainer.style.backgroundImage = `url(${meal.strMealThumb})`;
};
