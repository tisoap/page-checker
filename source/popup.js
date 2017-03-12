/**
 * Once the pop-up page has loaded, run popUpInit().
 */
window.addEventListener('load', (event) => {
  popUpInit();
}, false);

/**
 * Pop-up initialization. Sets the actions upon
 * clicking it's buttons.
 */
function popUpInit() {
  document.getElementById('button-validate')
  .addEventListener('click', validate);
}

/**
 * Action for clicking the validate button. Sends a message to the
 * background script asking it to perform the 'tidy' action.
 */
function validate() {
  console.log('Popup: Sending tidy request to background.');
  chrome.runtime.sendMessage({
    action: 'tidy',
  }, handleTidyResponse);
}

/**
 * Handles the response for the Tidy action from the background script.
 * @param {Object} message
 *        JSON message from the background script.
 */
function handleTidyResponse(message) {
  console.log(`Popup: Message from background:\n${message}`);
}
