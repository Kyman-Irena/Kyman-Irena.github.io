function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  return `${getRandInt(0,255)}, ${getRandInt(0,255)}, ${getRandInt(0,255)}`;
}


function removeDescr(){
    var h = document.querySelector('h4');
    h.parentNode.removeChild(h);
}

function changeColor() {
    var heads = document.querySelectorAll('h4');
    for (var h of heads)
    h.style.color = 'red' ;
}
function addDBefore(){
    var newEl = document.createElement('div');
    newEl.innerHTML = '<h4>Here is my best friend, his name is Aral</h4>';
    var div = document.getElementById('img');
    var img = document.querySelector('img');
    div.insertBefore(newEl, img);
}
function addDAfter(){
    var newEl = document.createElement('div');
    newEl.innerHTML = '<h4>Here is my best friend, his name is Aral</h4>';
    var div = document.getElementById('img');
    var img = document.querySelector('img');
    div.insertBefore(newEl, img.nextSibling);
}
function addDAppendChild() {
    var newEl = document.createElement('div');
    newEl.innerHTML = '<img src="../img/Aral.jpg" alt="a horse" >';
    var div = document.getElementById('img');
    newEl.setAttribute('id', 'img');
    div.appendChild(newEl);
}

function addFrame() {
var img = document.querySelector('img');
    img.classList.add('frame');
}