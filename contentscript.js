var docTitle = document.title;
chrome.runtime.sendMessage({from: 'contentScript', title:docTitle});
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request);
		document.title = request.title;
	}
);