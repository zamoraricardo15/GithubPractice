console.log("page loaded...");

var requestSpan = document.querySelector("#requests");

var connectionSpan = document.querySelector("#connections");

var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText = requestSpan.innerText - 1;
    connectionSpan.innerText = connectionSpan.innerText + 1;

}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText = requestSpan.innerText - 1;

}


function edit() {
    username.innerText = "Pura Vida";

}