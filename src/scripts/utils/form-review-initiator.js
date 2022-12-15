import FindfoodData from '../data/findfood-data';
import '../component/review-card';

const ReviewInitiator = {
  async init({ form }) {
    await form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      let [id, name, review] = event.target;

      id = id.value;
      name = name.value;
      review = review.value;
      if (id === '' && name === '' && review === '') return;

      const { error, customerReviews } = await FindfoodData.addReview({
        id,
        name,
        review,
      });
      if (!error) this._renderReviews(customerReviews);
    });
  },

  async _renderReviews(customerReviews) {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';

    customerReviews.map((review) => {
      const reviewCard = document.createElement('review-card');
      reviewCard.review = review;
      return reviewContainer.appendChild(reviewCard);
    });
  },
};

export default ReviewInitiator;
