import { Meal } from '../types';

const getMealIngredients = (meal: Meal): { ingredient: string; measure: string }[] => {
    const ingredients: { ingredient: string; measure: string }[] = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}` as keyof Meal];
        const measure = meal[`strMeasure${i}` as keyof Meal];
        if (!ingredient) {
            break;
        }
        ingredients.push({ ingredient, measure: measure || '' });
    }

    return ingredients;
}

export default getMealIngredients;