var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI*2, false);
context.closePath();
context.strokeStyle = "red";
context.fillStyle = "blue";
context.lineWidth = 3;
context.fill();
context.stroke();


var canvas = document.getElementById("demo2");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);



function saveDrawing() {
var canvas5 = document.getElementById("demo2");
window.open(canvas5.toDataURL("image/png"));
}


function convButton() {
var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");
var image = document.getElementById("img");

context.drawImage(image, 0, 0);

var imageData = context.getImageData(0, 0, 200, 200);
var px = imageData.data;
var length = px.length;
for (var i = 0; i < length; i += 4) {
var red = px[i];
var green = px[i + 1];
var blue = px[i + 2];
var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
px[i] = grayscale;
px[i + 1] = grayscale;
px[i + 2] = grayscale;
}
    context.putImageData(imageData, 0, 0);
}