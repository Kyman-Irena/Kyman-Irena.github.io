var shape = document.getElementById('fade');
shape.style.opacity='100';
function fadeOut() {
    
    if (shape.style.opacity ==='100'){
    shape.style.opacity='0';}
    else {
shape.style.opacity='100';        
    }
}
var logo = document.getElementById('logo1');
function stop(logo) {
 logo.style.webkitAnimationPlayState = "paused";   
}
function resume(logo){
logo.style.webkitAnimationPlayState = "running";
}
document.getElementById('logo2').addEventListener("click", moving);
function moving() {
    var logo= document.getElementById('logo2');
    logo.classList.add('moving');
}
document.getElementById('home').addEventListener("click", changeColor1);
document.getElementById('aboutUs').addEventListener("click", changeColor2);
document.getElementById('articles').addEventListener("click", changeColor3);
document.getElementById('contacts').addEventListener("click", changeColor4);
function changeColor1() {
    var text1 = document.getElementById('text1'); 
    text1.style.color = 'black';
}
function changeColor2() {
    var text2 = document.getElementById('text2');
    text2.style.color = 'black';
}
function changeColor3() {
    var text3 = document.getElementById('text3');
      text3.style.color = 'black';
}
function changeColor4() {
    var text4 = document.getElementById('text4');
    text4.style.color = 'black';
}