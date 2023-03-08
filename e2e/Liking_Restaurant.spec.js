const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#like_container');
  I.see('List Restaurant Favorite masih kosong', '.restaurant_is_empty');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('List Restaurant Favorite masih kosong', '.restaurant_is_empty');
  I.amOnPage('/');
  I.seeElement('.card-resto a');
  const firstFilmLink = locate('.card-resto a').first();
  const firstTitle = locate('.card-resto .restaurant_title').first();
  const firstFilmTitle = await I.grabTextFrom(firstTitle);
  I.click(firstFilmLink);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-resto');
  const likedFilmTitle = await I.grabTextFrom('.restaurant_title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
