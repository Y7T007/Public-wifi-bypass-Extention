document.addEventListener('DOMContentLoaded', function () {
document.getElementById('queryButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'queryElement' }, function (response) {
        document.getElementById('result').innerText = response.data;
    });
    });
});
});
