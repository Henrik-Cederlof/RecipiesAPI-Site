
// DOM Elements
export namespace DomElements {

  // Body
  export const body = document.querySelector('body') as HTMLBodyElement;

  // Main elements
  export const header = document.querySelector('header') as HTMLDivElement;
  export const main = document.getElementById('index') as HTMLDivElement;

    export const heroDescription = document.getElementById('content-desc') as HTMLParagraphElement;
    // Card Find Taste
    export const cardContainer = document.querySelector('card-container') as HTMLDivElement;

  // History
  export const mainHistory = document.getElementById('main-history') as HTMLDivElement;

  // About Us
  export const aboutMain = document.getElementById('main-about') as HTMLDivElement; 
    export const aboutUsContainer = document.getElementById('about-us') as HTMLDivElement;
  // Get MealImage 
  export const titleElement = document.getElementById('recipie-title') as HTMLElement;
   export const imageContainer = document.querySelector('.image-anim') as HTMLDivElement; 

  // Recipes
  export const recipesMain = document.getElementById('main-recipes') as HTMLDivElement;
  

}
