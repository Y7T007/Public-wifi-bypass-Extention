chrome.runtime.onMessage.addListener(
function (request, sender, sendResponse) {
    if (request.action == "queryElement") {
    var elementText = document.body.innerText;
    sendResponse({ data: elementText });
    }
}
);
