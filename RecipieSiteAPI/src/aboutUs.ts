import './components/_aboutUs.scss';
import { DomElements } from './domElements';

export const aboutUsContainer = document.createElement('div') as HTMLDivElement;
aboutUsContainer.id = 'about-us';

aboutUsContainer.innerHTML = `
  <section class="about-us">
    <div class="about-container">
      <h2 class="about-title">About Us</h2>
      <p class="about-text">
       Welcome to our culinary hub, where inspiration meets flavor! 
       Whether you're looking for your next delicious meal or simply exploring new cuisines, 
       we’ve got you covered. Our extensive collection of recipes spans cultures and traditions 
       from around the world, ensuring there’s something for every taste.
       You can search for recipes by country, 
       discover dishes based on ingredients you have on hand, 
       or take a chance with a random recipe for a fun surprise.
       Whether you're a seasoned chef or a beginner in the kitchen, 
       our goal is to spark creativity and make cooking an enjoyable experience.
       Start your journey today and find the perfect recipe to satisfy your cravings!
       </p>
    </div>
  </section>`