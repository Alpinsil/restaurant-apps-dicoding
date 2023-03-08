import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero" id="hero">
    <picture>
    <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
    <img src="./images/hero-image_4-large.jpg" 
         alt="Hero Image">
    </picture>
  </section>
  <section class="content" id="content">
    <h1>List Resto</h1>
    <div class="card-container" id="home_restaurant">
      <!-- insert using javascript -->
    </div>
  </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.Home();
    const cardContainer = document.querySelector('.card-container');
    restaurants.forEach((restaurant) => {
      cardContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
