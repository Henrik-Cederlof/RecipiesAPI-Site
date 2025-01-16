import getMeal from './getMeal';

export const getMealImage = async () => {
  try {
    // Fetch meal data
    const meal = await getMeal();
    if (meal) {
      // Update the hero description title
      const titleElement = document.getElementById('recipie-title') as HTMLElement;
      if (titleElement) {
        titleElement.textContent = meal.strMeal;
      }

      // Update the background image
      const imageContainer = document.querySelector('.image-anim') as HTMLDivElement;
      if (imageContainer && meal.strMealThumb) {
        imageContainer.style.backgroundImage = `url(${meal.strMealThumb})`;
      }
    }
  } catch (error) {
    console.error('Error updating hero section:', error);
  }
};
