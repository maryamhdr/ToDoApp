var inputField = document.getElementById("input");
var listElement = document.getElementById("list");

function addItem() {

    if (!inputField.value) return;

    var element = document.createElement("li");
    element.innerHTML = inputField.value;
    listElement.appendChild(element);
    inputField.value = ""
}

