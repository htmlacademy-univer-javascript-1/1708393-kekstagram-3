import {getRandom} from './utils.js';
function getDescription(id, description, likes, comments) {
  this.id = id;
  this.url = `photos/${id}.jpg`;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
}
const descriptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10','11', '12', '13', '14', '15','16', '17', '18',
  '19', '20', '21', '22', '23', '24', '25',];

export function generateObjects(numbPhotos) {
  const photos = [];
  for (let i = 0; i < numbPhotos + 1; i++) {
    photos[i] = new getDescription(i, descriptions[getRandom(0, descriptions.length)], getRandom(15, 200), getRandom(0, 200));
  }
  return photos;
}
//Задание 7 часть 2
