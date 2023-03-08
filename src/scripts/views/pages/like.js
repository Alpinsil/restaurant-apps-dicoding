import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
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
    <h1>List Favorite Resto</h1>
    <div class="card-container" id="like_container">
      <!-- insert using javascript -->
    </div>
  </section>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const cardContainer = document.querySelector('.card-container');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        cardContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    } else {
      cardContainer.innerHTML = '<h2 class="restaurant_is_empty">List Restaurant Favorite masih kosong</h2>';
    }
  },
};

export default Like;
