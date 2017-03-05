// const tidy = require('tidy-html5').tidy_html5;

chrome.runtime.onMessage.addListener(handleMessage);

/**
 * Handles messages sent to this background script.
 *
 * @param {Object} message
 *        The message itself. This is a JSON-ifiable object.
 * @param {Object} sender
 *        A runtime.MessageSender object representing the sender
 *        of the message.
 * @param {Function} sendResponse
 *        A function to call, at most once, to send a response to the
 *        message. The function takes a single argument, which may be
 *        any JSON-ifiable object. This argument is passed back to the
 *        message sender.
 *
 * @return {[type]} [description]
 */
function handleMessage(message, sender, sendResponse) {
  switch(message.action) {
    case 'tidy':
      let tidyResult = runTidy();
      sendResponse(tidyResult);
      break;
  }
  return true;
}

/**
 * Runs HTML Tidy on the current tab.
 *
 * @return {object} The result of the Tidy operation.
 */
function runTidy() {
  // TODO
  let result = {
    response: 'Tidy successful.',
  };
  return result;
};
