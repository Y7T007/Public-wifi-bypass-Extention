chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === 'extractAndRedirect') {
        // Extract the link from the script (modify this based on your criteria)
            var scriptContainingLink = document.querySelector('script'); // Adjust this selector based on the actual structure of the page

            var linkMatch = scriptContainingLink.textContent.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);

            console.log('content :', scriptContainingLink.textContent );
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
