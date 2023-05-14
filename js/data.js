import {getRandom} from './utils.js';

const descriptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10','11', '12', '13', '14', '15', '16', '17', '18',
  '19', '20', '21', '22', '23', '24', '25'];

function getDescription(number) {
  return {
    id: number,
    url: `photos/${number + 1}.jpg`,
    description: descriptions[getRandom(1, 25)],
    likes: getRandom(15, 200),
    comments: getRandom(0, 200),
  };
}

export function generateObjects(numbPhotos) {
  const photos = [];
  for (let i = 0; i < numbPhotos + 1; i++) {
    photos[i] = new getDescription(i);
  }
  return photos;
}
