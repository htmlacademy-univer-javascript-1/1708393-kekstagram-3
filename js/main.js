import './utils.js';
import './data.js';
import './render.js';
import './form.js';
import './formValidator.js';
import {generateObjects} from './data.js';
import {renderThumbnails} from './render.js';

renderThumbnails(generateObjects(25));
