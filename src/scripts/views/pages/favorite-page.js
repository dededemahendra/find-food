import FavoriteMovieIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <section class="restaurant mb">
        <div id="restaurant-list">
          <loading-text></loading-text>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteMovieIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.restaurant');
    const restaurantListContainer = document.querySelector('#restaurant-list');

    if (restaurants.length > 0) {
      restaurantListContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;

        restaurantListContainer.appendChild(restaurantCard);
      });
    } else {
      restaurantContainer.innerHTML = `
              <favorite-message></favorite-message>
      `;
    }
  },
};

export default Favorite;
