document.getElementById("response").addEventListener("input", changeTitle);

function changeTitle() {
	var response = document.getElementById("response").value;
	document.title = response;
}