/**
 * Listens for web requests before redirect and performs an action if the URL matches a specific URL.
 * @param {Object} details - Details of the web request.
 */
chrome.webRequest.onBeforeRedirect.addListener(
    function(details) {
        if (details.url === 'SPECIFIC_URL') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { action: 'extractAndRedirect' });
            });
        }
    },
    { urls: ['<all_urls>'] }
);
