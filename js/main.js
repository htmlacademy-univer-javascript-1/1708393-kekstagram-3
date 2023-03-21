function GetRandom(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
GetRandom(500, 100)
function isCorrect(str, maxLen) {
  return str.length <= maxLen;
}
isCorrect('Kotlin', 7)
