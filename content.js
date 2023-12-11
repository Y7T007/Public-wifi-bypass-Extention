    /**
     * Listens for a message from the background script and extracts the inner text of all script elements on the current page.
     * Sends the extracted code as a JSON string to the background script.
     *
     * @param {Object} message - The message received from the background script.
     * @param {Object} sender - The sender of the message.
     * @param {Function} sendResponse - The function to send a response back to the background script.
     */
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'extractScripts') {
        const scriptElements = document.querySelectorAll('script');
        let extractedCode = '';

        scriptElements.forEach((script) => {
        extractedCode += script.innerText + '\n';
        });

        chrome.runtime.sendMessage({ action: 'displayResult', result: JSON.stringify(extractedCode) });
    }
    });
