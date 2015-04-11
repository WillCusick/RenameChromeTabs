chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(sender.tab ?
				"from a content script:" + sender.tab.url :
				"from the extension");
	if (request.greeting) {
		sendResponse({farewell:"goodbye"});
	}
	console.log('Title: ' + tab.url);
	chrome.tabs.executeScript({
		code: 'document.head.title="Test"'
	})
	console.log('Title: ');
})