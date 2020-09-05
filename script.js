var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var butt = document.createElement("button");
	butt.appendChild(document.createTextNode("Delete"));
	li.appendChild(butt);
	butt.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var butt = document.createElement("button");
	butt.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(butt);
	butt.onclick = removeParent;
}

for (i = 0; i < listLength(); i++){
	deleteButton();
}

function removeParent(evnt){
	evnt.target.parentNode.remove();
}