// const assert = require('assert');

Feature('Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  const firstFilmLink = locate('.card-resto a').first();
  I.click(firstFilmLink);

  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('showing liked one restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.seeElement('.card-resto');
  I.seeNumberOfElements('.card-resto', 1);
});

Scenario('UnLike one restaurant', async ({ I }) => {
  I.amOnPage('/#/like');
  I.seeElement('.card-resto a');
  I.click('.card-resto a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('List Restaurant Favorite masih kosong', '.restaurant_is_empty');
});
