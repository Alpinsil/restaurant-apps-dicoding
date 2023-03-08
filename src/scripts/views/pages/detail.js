import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    return `
  <section class="hero" id="hero">
  <picture>
  <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
  <img src="./images/hero-image_4-large.jpg" 
       alt="Hero Image">
  </picture>
  </section>
  <section class="content" id="content">
    <h1>Detail Resto</h1>
    <div class="detail__card">
      <!-- insert using javascript -->
    </div>
    <div id="likeButtonContainer"></div>
    <a href="/#/addreview/${url.id}" class="add__btnreview" >Add Review</a>
  </section>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const detailCard = document.querySelector('.detail__card');
    detailCard.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
