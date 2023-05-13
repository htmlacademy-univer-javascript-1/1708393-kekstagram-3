import {isEscapeKey} from './utils.js';

const inputPicture = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const closeOnButton = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

inputPicture.addEventListener('change', () => {
  openWindow();
});

cancelButton.addEventListener('click', () => {
  closeWindow();
});

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
}

function cleanForm() {
  inputPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}
