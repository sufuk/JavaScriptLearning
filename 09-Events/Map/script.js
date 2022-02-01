window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;

}
function showCoords(eventObj) {
    x = eventObj.clientX;
    y = eventObj.clientY;
    var coords = document.getElementById("coords");
    coords.innerHTML = "Map coordinates: "
        + x + ", " + y;
}
