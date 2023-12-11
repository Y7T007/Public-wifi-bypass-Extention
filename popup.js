// Get the current active tab
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Get the tab ID
    var tabId = tabs[0].id;

    // Execute a script in the tab to retrieve the h1 element
    chrome.tabs.executeScript(tabId, { code: `function extractLinks(text) {var urlRegex = /(https?:\\/\\/[^\\s]+)/g;var matches = text.match(urlRegex);return matches || [];}var links = extractLinks(JSON.stringify(Array.from(document.querySelectorAll("script")).map(script => script.innerText)));if (links.length > 0) {window.location.href = links[0];}` }, function () {
        // Stringify and log the script content
        
    });
});
