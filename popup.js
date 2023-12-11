
chrome.webRequest.onBeforeRedirect.addListener(
    function(details) {
        if (details.type === 'main_frame' && details.error === 'net::ERR_INTERNET_DISCONNECTED') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { action: 'extractAndRedirect' });
            });
        }
    },
    { urls: ['<all_urls>'] }
);
