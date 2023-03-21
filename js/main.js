function GetRandom(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}

function isCorrect(str, maxLen) {
  return str.length <= maxLen;
}
