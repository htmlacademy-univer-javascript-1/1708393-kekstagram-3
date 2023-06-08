import './utils.js';
import './form.js';
import './formValidator.js';
import './effect.js';
import './scaling.js';
import { getPhotos } from './data.js';
import { renderThumbnails } from './render.js';
import { showDownloadAlert } from './check.js';

getPhotos(renderThumbnails, showDownloadAlert);
