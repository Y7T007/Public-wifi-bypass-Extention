chrome.runtime.onMessage.addListener(
function (request, sender, sendResponse) {
        if (request.action === 'extractAndRedirect') {

            var scriptContainingLink = document.querySelector('script'); // Adjust this selector based on the actual structure of the page
            var linkMatch = scriptContainingLink.textContent.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);

        if (linkMatch && linkMatch[1]) {
            var extractedLink = linkMatch[1];

            // Redirect to the extracted link
            window.location.href = extractedLink;
        } else {
            console.log('Link not found in the script.');
        }
        }
    }
);
