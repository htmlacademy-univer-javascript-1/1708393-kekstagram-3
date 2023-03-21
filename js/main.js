function getRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

getRandom(500, 100);
function isCorrect(str, maxLen) {
  return str.length <= maxLen;
}
isCorrect('Kotlin', 7);

function photo(id, url, description, likes, comments) {
  this.id = id;
  this.url = url;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
}

function generating(numbPhotos) {
  let photos = [];
  let descriptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10','11', '12', '13', '14', '15','16', '17', '18',
  '19', '20', '21', '22', '23', '24', '25',];
  for (let i = 0; i < numbPhotos + 1; i++) {
    photos[i] = new photo(i, `photos/${i}.jpg`, descriptions[i], getRandom(15, 200), getRandom(0, 200));
  }
  return photos;
}
generating(25);
