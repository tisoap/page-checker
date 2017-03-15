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

  // Gets the current tab url and runs a callback function,
  // passing the found url
  getCurrentTabUrl(function(url) {
    // Sends a JSON message to the background script with the
    // action to be performed and the page.
    chrome.runtime.sendMessage({
      action: 'tidy',
      page: url,
    }, handleTidyResponse);
  });
}

/**
 * Handles the response for the Tidy action from the background script.
 * @param {Object} message
 *        JSON message from the background script.
 */
function handleTidyResponse(message) {
  console.log(`Popup: Message from background:\n${message}`);
}

/**
 * Get the current URL.
 * TODO Separate in diferent file.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  let queryInfo = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    let tab = tabs[0];
    let url = tab.url;
    callback(url);
  });
}
