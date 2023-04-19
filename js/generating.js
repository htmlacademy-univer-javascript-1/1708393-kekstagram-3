import { photo } from './photoObject.js';
import { getRandom } from './getRandom.js';
import { descriptions } from './photoObject.js';

export function generating(numbPhotos) {
  const photos = [];
  for (let i = 0; i < numbPhotos + 1; i++) {
    photos[i] = new photo(i, `photos/${i}.jpg`, descriptions[i], getRandom(15, 200), getRandom(0, 200));
  }
  return photos;
}
