var inputField = document.getElementById("input");


// function addItem() {

//     if (!inputField.value) return;

//     var element = document.createElement("li");
//     element.innerHTML = inputField.value;
//     listElement.appendChild(element);
//     inputField.value = ""
// }

function changeTab(evt, keyMode) {
    var i, tabcontent, tablinks;

    // tabcontent = document.getElementsByClassName("main-btn-container");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tablinks-active", "");
    }

    // document.getElementById(keyMode).style.display = "flex";
    evt.currentTarget.className += " tablinks-active";
}

