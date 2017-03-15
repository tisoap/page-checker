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
      runTidy(message);
      console.log('Background: executing tidy, returning answer.');
      sendResponse('Asynchronously processing tidy.');
      break;
  }
  return true;
}

/**
 * Runs Tidy in a separate process.
 * @param  {Object} data JSON with data to be sent to the Tidy worker.
 */
function runTidy(data) {
  // Creates a new Web Worker
  let tidyWorker = new Worker('../libraries/tidy-worker.js');

  // What should be done when the worker sends a message back
  tidyWorker.onmessage = function(message) {
    console.log(
      `Background: Tidy finished processing with message: ${message.data}`);
  };

  tidyWorker.postMessage(data);
};
