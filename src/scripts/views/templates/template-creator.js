const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like"><i class="fa-regular fa-heart reguler-heart"></i></button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like"><i class="fa-solid fa-heart"></i></button>
`;

export { createLikeButtonTemplate, createUnlikeButtonTemplate };
