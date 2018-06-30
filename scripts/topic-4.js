window.addEventListener("load", getRank);

function getRank() { 
let request = new XMLHttpRequest();
 request.open("GET", "http://ikyman.com/cit261/dressage.json", true);
request.onload = function() {
  console.log(request.responseText);  
};
request.send;
}