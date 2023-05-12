export function getRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
export function isCorrect(str, maxLen) {
  return str.length <= maxLen;
}

