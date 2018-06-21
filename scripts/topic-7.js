function changeColor() {
  var color = document.getElementById('color');
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
 console.log(bgColor);
  
     color.style.background = bgColor;
}
function resetColor() {
  var color = document.getElementById('color');
  color.style.background = 'darkgreen';
}
function changeDimentions() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var color = document.getElementById('color');
    color.style.width = width;
    color.style.height = height;
}
function addShadow() {
var color = document.getElementById('color');
var shadow = document.getElementById('shadow').value;
 color.style.boxShadow = shadow;   
}
function changeToCircle() {
    var color = document.getElementById('color');
    color.style.width = '200px';
    color.style.height = '200px';
    color.classList.add('circle');
    
}
function hide() {
 var color = document.getElementById('color');
color.classList.toggle ('hidden');
}
function remove() {
 var color = document.getElementById('color');
color.classList.toggle ('removed');
}