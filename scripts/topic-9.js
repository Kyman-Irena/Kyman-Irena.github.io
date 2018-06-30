window.onload = function() {
    alert('The page is fully loaded.');
}

var logo = document.getElementById('logo1');
function stop(logo) {
 logo.style.webkitAnimationPlayState = "paused";   
}
function resume(logo){
logo.style.webkitAnimationPlayState = "running";
}

  var statusdiv = document.getElementById('status');
  var box1 = document.getElementById('box');
  var distG = 0;
  var distV = 0;
  var startx = 0;
  var starty = 0;
  box1.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX);// get x position of touch point relative to left edge of browser
        starty = parseInt (touchobj.clientY); // get x position of touch point relative to top edge of browser
        statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px' +'<br> ClientY: ' + starty+'px' ;
        e.preventDefault();
    }, false)

  box1.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0]; // reference first touch point for this event
        var distG = parseInt(touchobj.clientX) - startx;
        var distV = parseInt(touchobj.clientY) - starty;
        statusdiv.innerHTML = 'Status: touchmove<br> Horizontal distance traveled: ' + distG + 'px' + '<br> Vertical distance traveled:' + distV+ 'px';
        e.preventDefault();
    }, false)

box1.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point for this event
        statusdiv.innerHTML = 'Status: touchend<br> ClientX: ' + touchobj.clientX + 'px'+ '<br> ClientY: ' + touchobj.clientY+'px'
        e.preventDefault()
    }, false)
function allowDrop(event) {
    event.preventDefault();
}
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
