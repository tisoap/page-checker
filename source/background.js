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
 * @return {boolean} True.
 */
function handleMessage(message, sender, sendResponse) {
  switch(message.action) {
    case 'tidy':
      console.log('Background: received tidy request.');
      runTidy();
      console.log('Background: executing tidy, returning answer.');
      sendResponse('Asynchronously processing tidy.');
      break;
  }
  return true;
}

/**
 * Runs Tidy in a separate process.
 */
function runTidy() {
  let tidyWorker = new Worker('../libraries/tidy-worker.js');
  tidyWorker.onmessage = function(message) {
    console.log(
      `Background: Tidy finished processing with message: ${message.data}`);
  };
  tidyWorker.postMessage('tidy');
};
