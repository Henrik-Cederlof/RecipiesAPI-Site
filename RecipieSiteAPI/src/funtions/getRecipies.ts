import { Meal, Category, Root } from "../types";



export async function getAllMeals(category: string): Promise<Meal[]> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json() as { meals: Meal[] };
    return data.meals || [];  
}

export async function getMealDetails(idMeal: string): Promise<Meal | null> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const data = await response.json() as Root;
    return data.meals ? data.meals[0] : null;
}

export async function getFullMealInfo(category: string): Promise<Meal[]> {
    const basicMeals = await getAllMeals(category);
    const detailedMeals = await Promise.all(basicMeals.map(meal => getMealDetails(meal.idMeal)));
    return detailedMeals.filter(meal => meal !== null) as Meal[];
}





