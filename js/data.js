import {getRandom} from './utils.js';
function getDescription(id, description, likes, comments) {
  this.id = id;
  this.url = `photos/${id}.jpg`;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
}
const descriptions = ['aaaaaaaaaaaaaaaaaaaa1', 'aaaaaaaaaaaaaaaaaaaa2', 'aaaaaaaaaaaaaaaaaaaa3', 'aaaaaaaaaaaaaaaaaaaa4', 'aaaaaaaaaaaaaaaaaaaa5',
'aaaaaaaaaaaaaaaaaaaa6', 'aaaaaaaaaaaaaaaaaaaa7', 'aaaaaaaaaaaaaaaaaaaa8', 'aaaaaaaaaaaaaaaaaaaa9',
  'aaaaaaaaaaaaaaaaaaaa10','aaaaaaaaaaaaaaaaaaaa11', 'aaaaaaaaaaaaaaaaaaaa12', 'aaaaaaaaaaaaaaaaaaaa13', 'aaaaaaaaaaaaaaaaaaaa14',
  'aaaaaaaaaaaaaaaaaaaa15','aaaaaaaaaaaaaaaaaaaa16', 'aaaaaaaaaaaaaaaaaaaa17', 'aaaaaaaaaaaaaaaaaaaa18',
  'aaaaaaaaaaaaaaaaaaaa19', 'aaaaaaaaaaaaaaaaaaaa20', 'aaaaaaaaaaaaaaaaaaaa21', 'aaaaaaaaaaaaaaaaaaaa22',
  'aaaaaaaaaaaaaaaaaaaa23', 'aaaaaaaaaaaaaaaaaaaa24', 'aaaaaaaaaaaaaaaaaaaa25',];

export function generateObjects(numbPhotos) {
  const photos = [];
  for (let i = 0; i < numbPhotos + 1; i++) {
    photos[i] = new getDescription(i, descriptions[getRandom(0, descriptions.length)], getRandom(15, 200), getRandom(0, 200));
  }
  return photos;
}
//Задание 7 часть 2
