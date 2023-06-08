export function getRandomInt(a, b) {
  if (a < 0 || b < 0) {
    return('Необходимо использовать только неотрицательные числа');
  }
  if (a >= b) {
    return('Максимальная граница диапазона меньше или равна минимальной');
  } else {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
}

export function getLength(str, maxLen) {
  return str.length <= maxLen;
}

export const isEscapeKey = (e) => e.key === 'Escape';
