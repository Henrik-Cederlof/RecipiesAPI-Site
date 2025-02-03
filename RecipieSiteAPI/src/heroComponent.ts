import getMeal from './funtions/getMeal';

export const createHeroComponent = () => {
  const heroContent = document.createElement('div') as HTMLDivElement;
  heroContent.id = 'hero';
  heroContent.innerHTML = `
    <div class="hero-content-container">
    <div class="header-text">
     <h1 class="hero-title">GET INSPIRED BY</h1>
     <h1 class="hero-title-item">FOOD</h1>
    </div>
      <div class="hero-content">
      <div class="hero-content-image">
      
      <img class="image-anim"></img>
      </div>
        <div class="hero-content-text">
        <h2 id="recipe-title"></h2>
        <p>
        Here you can find inspiration for your next meal. We have a wide range of recipes from all over the world. You can search for recipes by country or by ingredients. You can also get a random recipe if you want to try something new. We hope you find something you like!
        
      
        </p>
        </div>
        
      </div>
      </div>`;

heroContent.querySelector('.btn-go')?.addEventListener('click', () => {
  console.log('Button clicked');
});

getMeal().then( meal => {
  const recipieTitle = heroContent.querySelector('#recipe-title') as HTMLElement;
  const imageCont = heroContent.querySelector('.image-anim') as HTMLImageElement;

  if(meal) {
    if (recipieTitle) {
    recipieTitle.textContent = meal.strMeal;
  }
  if (imageCont && meal.strMealThumb) {
    imageCont.style.backgroundImage = `url(${meal.strMealThumb})`;
    imageCont.style.backgroundSize = 'cover';
    imageCont.style.backgroundPosition = 'center';

  }  

  } else {
    console.error('Finns inga recepet från heroComponent, kolla med kocken!', new Error());
  }
});


return heroContent;
};