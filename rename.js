function sendMessage() {
	var title = document.getElementById('response').value;
	chrome.runtime.sendMessage({from:'popup', title:title}, function(response) {
		console.log(response);
	})
	console.log("Message sent?");
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("response").addEventListener("input", sendMessage);
	console.log("DOMContentLoaded");
	chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) {
    	console.log(sender.tab ?
        	        "from a content script:" + sender.tab.url :
    	            "from the extension");
   	if (request.greeting == "hello")
    	  sendResponse({farewell: "goodbye"});
    else
    	sendResponse({test: "nope"});
  	});
	console.log("MessageListener added");
})