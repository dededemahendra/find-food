import InfooditySource from '../../data/findfood-data';
import '../../component/restaurant-card';
import '../../component/testimonial-card';
import '../../component/jumbotron-text';
import data from '../../../json/Testimonials.json';

const HomePage = {
  async render() {
    return `
      <section class="jumbotron">
        <jumbotron-text></jumbotron-text>
      </section>
      <section class="restaurant">
        <h2 id="restaurant__title">Find Restaurant</h2>
        <p class="restaurant__subtitle">Many restaurant choices that you can look for</p>
        <div id="restaurant-list">
        </div>
      </section>
      <section class="testimonials">
        <h2 class="testimonials__title">Testimonials</h2>
        <p class="testimonials__subtitle">What do they say about this platform?</p>
        <div id="testimonial-list">
        </div>
      </section>
  `;
  },

  async afterRender() {
    const { error, message, restaurants } = await InfooditySource.restaurants();
    const restaurantListContainer = document.getElementById('restaurant-list');
    const testimonialListContainer = document.getElementById('testimonial-list');

    if (!error) {
      restaurantListContainer.innerHTML = '';
      testimonialListContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;

        restaurantListContainer.appendChild(restaurantCard);
      });

      data.testimonials.forEach((testimonial) => {
        const testimonialCard = document.createElement('testimonial-card');
        testimonialCard.testimonial = testimonial;

        testimonialListContainer.appendChild(testimonialCard);
      });
    } else {
      restaurantListContainer.innerHTML = `<p class='message'>${message}</p>`;
    }
  },
};

export default HomePage;
