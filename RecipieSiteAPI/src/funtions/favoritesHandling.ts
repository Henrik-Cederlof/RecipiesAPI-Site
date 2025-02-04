import { Meal } from "../types";
  
const FAV_ID = "favoriteRecipes"
  
 
//Hämta favorites
export const getFavs = (): Meal[] => {
  const favorites = localStorage.getItem(FAV_ID);
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavItem = (meal:Meal): boolean => {
  //Hämta favs listan
  let favorites = getFavs();
  // Kontrollerar om någon av de befintliga favoriterna har samma
  const existsInFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
  // Om den finns i favs listan
  if (existsInFav) {
    // Ta bort från favs listan
    favorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
  } else {
    // Annars lägg till i favs listan
    favorites.push(meal);
  } 
  localStorage.setItem(FAV_ID, JSON.stringify(favorites));
  return !existsInFav;
};

export const isFav = (mealId: string): boolean => {
  return getFavs().some((fav) => fav.idMeal === mealId);
};
