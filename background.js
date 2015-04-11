chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.from == 'contentScript')
		console.log(message);
	else if (message.from == 'popup') {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {from:'background', title:message.title},
									function (response) {});
		});
	}
});