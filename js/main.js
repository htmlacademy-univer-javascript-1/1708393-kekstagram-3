function GetRandom(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
console.log(GetRandom(110, 50))

function isCorrect(str, max_len) {
  return str.length <= max_len;
}
console.log(isCorrect("lll", 3));
