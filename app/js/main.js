"usestrict";

var inputField = document.getElementById("input");

var memoryItmId = 0;


// function addItem() {

//     if (!inputField.value) return;

//     var element = document.createElement("li");
//     element.innerHTML = inputField.value;
//     listElement.appendChild(element);
//     inputField.value = ""
// }

function changeTab(evt, keyMode) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active-tab", "");
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tablinks-active", "");
    }

    document.getElementById(keyMode).className += " active-tab";
    evt.currentTarget.className += " tablinks-active";
}

function storeInMemory() {

    if (memoryItmId === 0) {

        memoryList1.innerHTML = "";
        trashIcon1.style.display = "flex";
        memoryList2.innerHTML = "";
        trashIcon2.style.display = "flex";

        document.getElementById('mcBtn').className = document.getElementById('mcBtn').className.replace(" disabled", "");
        document.getElementById('mrBtn').className = document.getElementById('mrBtn').className.replace(" disabled", "");
        document.getElementById('mBtn').className = document.getElementById('mBtn').className.replace(" disabled", "");
    }

    var id1 = "item1_" + memoryItmId;
    var id2 = "item2_" + memoryItmId;

    var value = parseFloat(result.textContent);

    var listItem1 = document.createElement("li");
    var savedValue1 = document.createElement("div");
    var savedValueControls1 = document.createElement("div");
    var btnDelete1 = document.createElement("button");
    var btnIncrement1 = document.createElement("button");
    var btnDecrement1 = document.createElement("button");

    var listItem2 = document.createElement("li");
    var savedValue2 = document.createElement("div");
    var savedValueControls2 = document.createElement("div");
    var btnDelete2 = document.createElement("button");
    var btnIncrement2 = document.createElement("button");
    var btnDecrement2 = document.createElement("button");


    listItem1.className = "memory-item";
    savedValue1.className = "saved-value";
    savedValueControls1.className = "saved-value-controls";
    btnDecrement1.className = "control-btn";
    btnIncrement1.className = "control-btn";
    btnDelete1.className = "control-btn";

    listItem2.className = "memory-item";
    savedValue2.className = "saved-value";
    savedValueControls2.className = "saved-value-controls";
    btnDecrement2.className = "control-btn";
    btnIncrement2.className = "control-btn";
    btnDelete2.className = "control-btn";


    savedValue1.textContent = value;
    btnDelete1.textContent = "MC";
    btnIncrement1.textContent = "M+";
    btnDecrement1.textContent = "M-";
    listItem1.setAttribute("value", value);

    savedValue2.textContent = value;
    btnDelete2.textContent = "MC";
    btnIncrement2.textContent = "M+";
    btnDecrement2.textContent = "M-";
    listItem2.setAttribute("value", value);


    btnDelete1.onclick = deleteMemoryItem;
    btnIncrement1.onclick = incremetMemoryItem;
    btnDecrement1.onclick = decrementMemoryItem;

    btnDelete2.onclick = deleteMemoryItem;
    btnIncrement2.onclick = incremetMemoryItem;
    btnDecrement2.onclick = decrementMemoryItem;


    savedValueControls1.appendChild(btnDelete1);
    savedValueControls1.appendChild(btnIncrement1);
    savedValueControls1.appendChild(btnDecrement1);

    savedValueControls2.appendChild(btnDelete2);
    savedValueControls2.appendChild(btnIncrement2);
    savedValueControls2.appendChild(btnDecrement2);

    var lastChild1 = memoryList1.firstChild;
    var lastChild2 = memoryList2.firstChild;

    listItem1.appendChild(savedValue1);
    listItem1.appendChild(savedValueControls1);
    memoryList1.insertBefore(listItem1, lastChild1);

    listItem2.appendChild(savedValue2);
    listItem2.appendChild(savedValueControls2);
    memoryList2.insertBefore(listItem2, lastChild2);


    listItem1.setAttribute("id", id1);
    listItem2.setAttribute("id", id2);

    memoryItmId++;
    txtResult = "";
}
