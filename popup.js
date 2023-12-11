chrome.webRequest.onBeforeRedirect.addListener(
    function(details) {
        if (details.type === 'main_frame' && details.error === 'net::ERR_INTERNET_DISCONNECTED') {
            // Check if Wi-Fi is turned on
            chrome.system.network.getNetworkInterfaces(function(interfaces) {
                var wifiConnected = interfaces.some(function(interface) {
                    return interface.type === 'wifi' && interface.prefixLength > 0;
                });

                if (!wifiConnected) {
                    // Wi-Fi is not connected, handle accordingly
                    console.log('Wi-Fi is not connected');
                    return;
                }

                // Wi-Fi is connected, but internet is not reachable
                console.log('Internet connection is not available');

                // You can add your logic here to handle the redirection
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, { action: 'extractAndRedirect' });
                });
            });
        }
    },
    { urls: ['<all_urls>'] }
);
