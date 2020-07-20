/**
 * @file Beispiel für die Nutzung der "Engine".
 * @module Beispiel
 */


const WIDTH = 50;
const HEIGHT = 50;
const TILESIZE = 10;

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
 * @var {number} tickIntervall Die Variabel in der der Intervall gespeichert wird
 */
var tickIntervall;

var map = generateArray(WIDTH, HEIGHT, 0);
console.log(map)

/**
 * Setzt alles in den Startzustand
 */
function init() {
    c.cls();
    tickIntervall = setInterval(draw, 1000 / FPS);

}


/**
 * Aktualisiert und zeichnet alles
 */
function tick() {
    map = calc(map);
}

function draw(){
    c.cls();
    c.fillArray2D(map, ["white", "black"], TILESIZE, TILESIZE);
}