    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.action === 'displayResult') {
        console.log('Extracted Code:', message.result);
        }
    });
    