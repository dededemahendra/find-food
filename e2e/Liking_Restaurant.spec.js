const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const MessageText = "You don't have a favorite restaurant";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.see(MessageText, '.favorite__message');
});

Scenario('like and unlike one restaurant', async ({ I }) => {
  // Start like
  I.see(MessageText, '.favorite__message');

  I.amOnPage('/');
  I.waitForElement('.restaurant__card-body-section h3');
  const firstRestaurant = locate('.restaurant__card-body-section h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  let firstRestaurantLink = locate('.restaurant__card-body-title').first();

  I.click(firstRestaurantLink);
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__card-body-section h3');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__card-body-section h3');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Start unlike
  firstRestaurantLink = locate('.restaurant__card-body-title').first();

  I.click(firstRestaurantLink);
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.favorite__message');
  I.see(MessageText, '.favorite__message');
});
