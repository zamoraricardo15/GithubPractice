function load() {
    alert("Loading weather report...")

}

var cookie = document.querySelector(".cookie01");
function accept() {
    cookie.remove();
}


function fahcel(temp) {
    return Math.round(5 / 9*(temp-32));
}

function celfah(temp) {
    return Math.round(9/5 * temp+32);
}


function convert(element) {
    console.log(element.value);

    for(var i=1; i<9; i = i + 1) {
        var tempConv = document.querySelector("#temp" + i);

        var tempNue = parseInt(tempConv.innerText);
        if(element.value == "°C") {
            tempConv.innerText = fahcel(tempNue);
        } else {
            tempConv.innerText = celfah(tempNue);
        }
    }
}