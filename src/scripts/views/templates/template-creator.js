import CONFIG from '../../globals/config';
import { DrinksMenu, FoodsMenu, CustomersReview } from '../components';

const createRestaurantDetailTemplate = (restaurant) => `
  <div>
    <h1>${restaurant.name}</h1>
    <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload">
    <h3>${restaurant.address}</h3>
    <h3>${restaurant.city}</h3>
    <p class="detail__restaurant">${restaurant.description}</p>
    <h2 class="menu__title">Daftar Menu</h2>
    <div class="daftar__menu">
      <div class="food__menu">
        <h3>Makanan</h3>
        ${FoodsMenu(restaurant.menus.foods)}
      </div>
      <div class="drink__menu">
        <h3>Minuman</h3>
        ${DrinksMenu(restaurant.menus.drinks)}
      </div>
    </div>
    <h3 class="title__review">Customer Reviews</h3>
    <div class="customer_reviews">
      ${CustomersReview(restaurant.customerReviews)}
    </div>
  </div>
`;

const createRestaurantTemplate = (restaurant) => `
<div class="card-resto">
  <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload">
  <div class="card-content">
    <h2 class="restaurant_title" >${restaurant.name}</h2>
    <h3>Rating ${restaurant.rating}</h3>
    <h4>${restaurant.city}</h4>
  </div>
  <a href="/#/detail/${
  restaurant.id
}" class="read__more">Read More <i class="fa fa-arrow-right"></i></a>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
