const pictureTemplate = document.querySelector('#picture');
const pictureContainer = document.querySelector('.pictures');

export function renderThumbnails(photos) {
  const pictureFragment = document.createDocumentFragment();
  for (const {url, likes, comments} of photos) {
    const picture = pictureTemplate.cloneNode(true).content;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(picture);
  }

  pictureContainer.appendChild(pictureFragment);
}
