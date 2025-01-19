document.getElementById("modifyButton").addEventListener("click", function () {
    // Get the URL from the input box
    let originalUrl = document.getElementById("urlInput").value;
  
    // Remove 'http://' or 'https://'
    let cleanedUrl = originalUrl.replace(/^https?:\/\//, "");
  
    // Replace the domain with $target.com
    let modifiedUrl = `https://web.archive.org/cdx/search/cdx?url=${cleanedUrl}&matchType=domain&fl=original&collapse=urlkey`;
  
    // Open the modified URL in a new tab
    chrome.tabs.create({ url: modifiedUrl });
  });