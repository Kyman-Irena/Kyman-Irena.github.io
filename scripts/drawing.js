var canvas = document.getElementById('drawing');
var c = canvas.getContext( '2d' );
var  mouseX = 0;
var  mouseY = 0;
var  colour = 'blue';
var mousedown;

function draw() {
  if (mousedown) {
    // set the colour
    c.fillStyle = colour; 
    // start a path and paint a circle of 10 pixels at the mouse position
    c.beginPath();
    c.arc( mouseX, mouseY, 5 , 0, Math.PI*2, true );
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener( 'mousemove', function( event ){ 
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    draw();
}, false );

canvas.addEventListener( 'mousedown', function( event ) {
    mousedown = true;
}, false );
canvas.addEventListener( 'mouseup', function( event ) {
    mousedown = false;
}, false );

