window.onload = init;
var files = ["12.jpg",
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
            "10.jpg",
            "11.jpg"];

function timeHandler(){

    var imageElement = document.getElementById("1");
    imageElement.setAttribute("src", files[0]);

    files.push(files[0]);
    files.shift();
    console.log(files);
}
function init (){
    setInterval(timeHandler, 1000);
}

