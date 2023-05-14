import './utils.js';
import './render.js';
import './form.js';
import './formValidator.js';
import './scaling.js';
import './effect.js';

import { getDescription } from './data.js';
import { renderThumbnails } from './render.js';
import { showDownloadAlert } from './failForm.js';

getDescription(renderThumbnails, showDownloadAlert)

