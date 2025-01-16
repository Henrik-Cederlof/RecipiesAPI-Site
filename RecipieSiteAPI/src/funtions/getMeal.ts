const getRandomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
import { AllTypes, Meal } from "../types";

const getMeal = async (): Promise<Meal | undefined> => {
  try {
    const response = await fetch(getRandomURL);
    const data = await response.json() as AllTypes.Root;
    return data.meals[0];
  } catch (error) {
    console.error("Kunde inte hämta maten, kocken snubbla", error);
  }
};

export default getMeal;
