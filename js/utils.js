export function getRandom(a, b) {
  if (a < 0 || b < 0) {
    return('Необходимо использовать только неотрицательные числа');
  }
  if (a <= b) {
    return('Максимальная граница диапазона меньше минимальной');
  } else {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
}
export function isCorrect(str, maxLen) {
  return str.length <= maxLen;
}
export const isEscapeKey = (e) => e.key === 'Escape';
