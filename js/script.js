alert("Option 1 :" + "\n" + "swipe for generate new mondrian on mobile and press space bar for laptop" + "\n" + "Option 2 :" + "\n" + "Click on color to change her");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var colorContainer = document.getElementsByClassName("color-container")
let eltRow1 = document.getElementById("row1");
let eltRow2 = document.getElementById("row2");
let eltRow3 = document.getElementById("row3");
let eltRow4 = document.getElementById("row4");
let eltRow5 = document.getElementById("row4");
var color = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 255, 255)"]

for (let i = 0; i < colorContainer.length; i++) {
    let currentElement = colorContainer[i];
    currentElement.addEventListener("click", function(e) {
        changeColor(currentElement)
    }, false);
}

function changeColor(container) {
    let maxRandom = getRandomInt(color.length);
    let newColor = color[maxRandom];
    let containerStyle = getComputedStyle(container);
    let containerColor = containerStyle.getPropertyValue("background-color")
    while (containerColor === newColor) {
        maxRandom = getRandomInt(color.length)
        newColor = color[maxRandom];
    }
    container.style.backgroundColor = newColor;
}

document.addEventListener("keyup", function(e) {
    e = e || window.event;
    var key = e.which ? e.which : event.keyCode;
    if (key == 32) newMondrian();
}, false);
$(window).touchwipe({
    wipeLeft: function() {
        newMondrian();
    },
    wipeRight: function() {
        newMondrian();
    },
    wipeUp: function() {
        newMondrian();
    },
    wipeDown: function() {
        newMondrian();
    },
    min_move_x: 20,
    min_move_y: 20,
    preventDefaultEvents: true
});

function newMondrian() {
    let whiteContainer = 0;
    let maxRandom = colorContainer.length;
    let i = 0;
    let currentContainer = colorContainer[i];
    while (i < maxRandom) {
        currentContainer = colorContainer[i]
        changeColor(currentContainer);
        colorContainer[getRandomInt(maxRandom)].style.flex = getRandomInt2(1, 6);
        let containerStyle = getComputedStyle(currentContainer);
        let containerColor = containerStyle.getPropertyValue("background-color")
        if (containerColor === color[3]) {
            whiteContainer++;
        }
        i++;
    }
    while (whiteContainer < 7) {
        colorContainer[getRandomInt(maxRandom)].style.backgroundColor = "white";
        whiteContainer++;
    }

};