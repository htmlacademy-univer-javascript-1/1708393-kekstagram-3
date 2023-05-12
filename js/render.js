const pictureTemplate = document.querySelector('#picture').content;
const container = document.querySelector('.pictures');

export function renderThumbnails(getObjects) {
  const picturesFragment = document.createDocumentFragment();

  getObjects.forEach(({url, likes, coments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').textContent = url;
    pictureElement.querySelector('.picture__likes').style.fill = likes;
    pictureElement.querySelector('.picture__comments').style.fill = coments;
    picturesFragment.appendChild(pictureElement);
  });
  container.appendChild(picturesFragment);
}
