function addButton() {
    var div = document.querySelector('div');
    var btn = document.createElement("BUTTON");
    btn.textContent = 'A New Button';
    btn.classList.add('submission')
    btn.setAttribute('id', 'addedButton')
    div.appendChild(btn);
}
function removeButton(){
    var p = document.getElementById('addedButton');
    p.parentNode.removeChild(p);
}

function changeColor() {
    var pars = document.querySelectorAll('p');
    var btn = document.createElement("BUTTON");
    btn.textContent = 'A New Button';
    btn.classList.add('submission')
    for (var p of pars)
    p.style.color = 'blue';
}
function addDBefore(){
    var newEl = document.createElement('div');
    newEl.innerHTML = '<p>Here is my best friend, his name is Aral</p>';
    var div = document.getElementById('img');
    var img = document.querySelector('img');
    div.insertBefore(newEl, img);
}
function addDAfter(){
    var newEl = document.createElement('div');
    newEl.innerHTML = '<p>Here is my best friend, his name is Aral</p>';
    var div = document.getElementById('img');
    var img = document.querySelector('img');
    div.insertBefore(newEl, img.nextSibling);
}
function addDAppendChild() {
    var newEl = document.createElement('div');
    newEl.innerHTML = '<p>Here is my best friend, his name is Aral</p>';
    var div = document.getElementById('img');
    div.appendChild(newEl);
}