window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmousemove = showAnswer;
        images[i].onmouseout = hideAnswer;
    }
}

function showAnswer(event) {
    var image = event.target; // Left side of the equation but the object
    var name = image.id;
    name = name + ".jpg";
    image.src = name;
}

function hideAnswer(event) {
    var image = event.target; // Left side of the equation but the object
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}
