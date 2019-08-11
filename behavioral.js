
var inputText = "";
var list = [];

function addItem() {

    var inputField = document.getElementById("input");
    inputText = inputField.value;
    inputField.value = "";
    list.push(inputText);
    console.log(list)
    inputText = "";
}