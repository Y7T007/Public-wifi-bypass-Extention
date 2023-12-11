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
