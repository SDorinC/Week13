let canvas1 = document.querySelector("#canvas1");
let canvas2 = document.querySelector("#canvas2");
let svg1 = document.querySelector("#svg1");
let svg2 = document.querySelector("#svg2");

function run(item, color, sItem, sColor) {
    setInterval(function () {
        let num = Math.random();
        if (num < 0.25) {
            drawTriangle(item, color);
            drawSVGSquare(sItem, sColor);
        } else if ((num >= 0.25) && (num < 0.5)) {
            drawCircle(item, color);
            drawSVGRectangle(sItem, sColor);
        } else if ((num >= 0.5) && (num < 0.75)) {
            drawRectangle(item, color);
            drawSVGCircle(sItem, sColor);
        } else {
            drawSquare(item, color);
            drawSVGTriangle(sItem, sColor);
        }
        setTimeout(function () {
            item.getContext("2d").clearRect(0, 0, 1000, 1000);
            sItem.innerHTML = "";
        }, 1500)
    }, 2000)
}

run(canvas1, "red", svg1, "green");
run(canvas2, "blue", svg2, "yellow");

function drawSquare(item, color) {
    let context = item.getContext("2d");
    context.fillStyle = color;
    context.fillRect(90, 45, 100, 50);
}

function drawRectangle(item, color) {
    let context = item.getContext("2d");
    context.fillStyle = color;
    context.fillRect(90, 25, 100, 100);
}

function drawTriangle(item, color) {
    let context = item.getContext("2d");
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(150, 50);
    context.lineTo(200, 100);
    context.closePath();
    context.fillStyle = color;
    context.fill();

}

function drawCircle(item, color) {
    let context = item.getContext("2d");
    context.beginPath();
    context.arc(140, 70, 30, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

function drawSVGRectangle(item, color) {
    let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectangle.setAttribute("x", "100");
    rectangle.setAttribute("y", "50");
    rectangle.setAttribute("width", "200");
    rectangle.setAttribute("height", "300");
    rectangle.setAttribute("fill", color);
    item.appendChild(rectangle);
}

function drawSVGSquare(item, color) {
    let square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    square.setAttribute("x", "100");
    square.setAttribute("y", "100");
    square.setAttribute("width", "200");
    square.setAttribute("height", "200");
    square.setAttribute("fill", color);
    item.appendChild(square);
}

function drawSVGCircle(item, color) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "200");
    circle.setAttribute("cy", "200");
    circle.setAttribute("r", "100");
    circle.setAttribute("fill", color);
    item.appendChild(circle);
}

function drawSVGTriangle(item, color) {
    let triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", "100 100,300 100, 200 300");
    triangle.setAttribute("fill", color);
    item.appendChild(triangle);
}