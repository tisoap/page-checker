/**
 * Web Worker functions for the tidy-html5 library. This
 * file will be concatenated at the end of the JavaScript
 * compiled Tidy.
 */

/**
 * Configuration for the Tidy script. For more info view:
 * http://tidy.sourceforge.net/docs/quickref.html
 *
 * @type {Object}
 */
tidyConfig = {
  'markup': 'no',
  'accessibility-check': 3,
  'char-encoding': 'utf8',
  'quiet': 'yes',
};

/**
 * Handles postMessage() calls from other scripts.
 * @param {object} message
 */
onmessage = function(message) {
  console.log('Tidy worker: Message received.');
  if (message.data === 'tidy') {
    // TODO get the current page source HTML
    // TODO wrap console.log() calls from tidy library to a more useful function
    tidy_html5('<h1>I <3 bad markup</h2>', tidyConfig);
    postMessage('Tidy success!\n');
  } else {
    postMessage('Tidy error!');
  }
};