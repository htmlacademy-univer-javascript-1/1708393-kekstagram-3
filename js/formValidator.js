import { isCorrect } from './utils.js';

const form = document.querySelector('.img-upload__form');
const pristine  = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(form.querySelector('.text__description'),
  validateComment, 'Длина комментария - от 20 до 140 символов');

form.addEventListener('submit', (e) => {
  if (!pristine.validate()) {
    e.preventDefault();
  }
});

function validateComment(element) {
  return !isCorrect(element, 19) && isCorrect(element, 140);
}
