const getRandomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
import {Root, Meal } from "../types";

const getMeal = async (): Promise<Meal> => {
    const response = await fetch(getRandomURL);
    const data = await response.json() as Root;
    return data.meals[0];
 
};

export default getMeal;
