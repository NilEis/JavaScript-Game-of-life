/**
 * @file Beispiel für die Nutzung der "Engine".
 * @module Beispiel
 */


const WIDTH = 200;
const HEIGHT = 200;
const TILESIZE = 3;

/**
 * @constant {canvasClass} c Die canvasClass
 */
const c = new canvasClass("canvasID", "canvas", WIDTH * TILESIZE, HEIGHT * TILESIZE, "white");

const FPS = 0;

/**
* @event onmousemove
* @function updateMouse
EventListener on body
*/
document.getElementById("main").addEventListener("mousemove", function (event) {
    updateMouse(event);
});

/**
 * @var {number} drawIntervall Die Variabel in der der Intervall gespeichert wird
 */
var drawIntervall;

/**
 * @var {number} tickIntervall Die Variabel in der der Intervall gespeichert wird
 */
var tickIntervall;

var map;
console.log(map)

/**
 * Setzt alles in den Startzustand
 */
function init() {
    c.cls();
    map = generateArray(WIDTH, HEIGHT, 0);
    clearTimeout(drawIntervall);
    clearTimeout(tickIntervall);
    drawIntervall = setTimeout(draw, 1000 / FPS);
}


/**
 * Aktualisiert und zeichnet alles
 */
function tick() {
    map = calc(map);
    tickIntervall = setTimeout(tick, 1000 / FPS);
}

function draw() {
    c.cls();
    c.fillArray2D(map, ["white", "black"], TILESIZE, TILESIZE);
    if (c.mouseOnCanvas(mouseX, mouseY))
        c.drawRect(Math.floor(mouseX / TILESIZE) * TILESIZE, Math.floor(mouseY / TILESIZE) * TILESIZE, TILESIZE, TILESIZE, "grey");
    drawIntervall = setTimeout(draw, 1000 / FPS);
}