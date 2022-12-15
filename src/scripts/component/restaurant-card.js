import CONFIG from '../globals/global.config';

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this.render(restaurant);
  }

  render(restaurant) {
    this.innerHTML = `
			<img
				src='${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}'
				alt='${restaurant.name}'
				loading='lazy'
			/>

			<section class='restaurant__card-info'>
				<section>
					<i class='fa-solid fa-location-dot'></i> <p>${restaurant.city}</p>
				</section>
				<section>
					<i class='fa-solid fa-star'></i> <p>${restaurant.rating}</p>
				</section>
			</section>

			<section class='restaurant__card-body'>
				<section class='restaurant__card-body-section'>
					<a class='restaurant__card-body-title' href='/#/detail/${restaurant.id}' aria-label='View Detail ${restaurant.name}'>
						<h3>${restaurant.name}</h3>
					</a>
					<p>${restaurant.description}</p>
				</section>
			</section>
		`;
  }
}

customElements.define('restaurant-card', RestaurantCard);
