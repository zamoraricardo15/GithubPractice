console.log("page loading...");

var likes = [27, 2, 7];
var spans = [
    document.querySelector("#like1"),
    document.querySelector("#like2"),
    document.querySelector("#like3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}