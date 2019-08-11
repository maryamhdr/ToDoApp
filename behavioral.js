window.onload = function () {
    document.getElementById("input").value = "";
    document.getElementById("list").innerHTML = "Nothing to do"
}


function addItem() {

    var inputText = "";

    var inputField = document.getElementById("input");
    var listElement = document.getElementById("list");

    if (listElement.innerHTML === "Nothing to do") {
        listElement.innerHTML = ""
    }

    inputText = inputField.value;
    inputField.value = "";

    if (inputText.length === 0) {
        alert("Please fill the input field.")
    } else {
        let element = document.createElement("li");
        element.innerHTML = "<i class='far fa-list-alt fa-fw'></i>  " + inputText;
        listElement.appendChild(element)
        inputText = "";
    }

}