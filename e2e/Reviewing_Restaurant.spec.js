Feature('Review Restaurant');

Scenario('review restaurant', async ({ I }) => {
  const name = 'Sindy';
  const review = 'Nice restaurant!';

  I.amOnPage('/');
  I.waitForElement('.restaurant__card-body-section h3');
  const firstRestaurantLink = locate('.restaurant__card-body-title').first();

  I.click(firstRestaurantLink);
  I.waitForElement('#reviewForm');
  I.fillField('[name="name"]', name);
  I.fillField('[name="review"]', review);

  I.click(locate('#reviewForm button'));
  I.see(name, '.review .name');
  I.see(review, '.review .text');
});
