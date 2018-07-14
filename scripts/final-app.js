const link = document.getElementById('output');
window.addEventListener("load", getList);
link.addEventListener("click", getFlight);
const back = document.getElementById('back');

let flightObj;

function getList() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
         //if (request.readyState == 1) {
          // alert("1.Server Connection has been established!");
        // } else if (request.readyState == 2) {
         //  alert("2.Your request was received by the server!");
      // } else if (request.readyState == 3) {
     //    alert("3.Request is being processed by the server");
    //   } else 
        if (request.readyState == 4 && request.status == 200) {
            //alert("4.Responce has been sent and is ready to process");
            let flights = JSON.parse(request.responseText);
            console.log(flights);
            displayInOrder(flights);
            flightObj = flights;
            
            
        } //else {
        //     alert("Error: the request was not successful");
        // }
    };

    request.open("GET", "https://api.spacexdata.com/v2/launches", true); 
    request.send();
}


function displayInOrder(flights) {

       
    
    var output='<table>';
    output += '<tr>';
    output += '<th>Flight Number</th>';
    output += '<th>Year</th>';
    output += '<th>Mission Name</th>';
    output += '</tr>';
    for (let i=0; i<flights.length; i++) {
        output += '<tr>';
        output += '<td><a href="#" data-number="' + i + '">'+flights[i].flight_number+'</a></td>';
        output += '<td><a href="#" data-number="' + i + '">'+ flights[i].launch_year+'</a></td>';
        output += '<td><a href="#" data-number="' + i + '">'+ flights[i].mission_name+'</a></td>';
        output += '</tr>';
    }
    output += '</table>';
    document.getElementById('output').innerHTML = output;


}

function getFlight() {
    let i = event.target.getAttribute("data-number");
    console.log(flightObj[i].url);
    let str = '<div id="background">' +'<img src="'+flightObj[i].links.mission_patch_small+'" alt="picture of the flight">'+
    '<ul>' + 
        '<li class="name">' +flightObj[i].mission_name + '</li>' +
        '<li class="info"> Year: ' + flightObj[i].launch_year + '</li>' +
        '<li class="info"> Details: ' + flightObj[i].details + '</li>'+
        '<iframe width="420" height="315" src="'+flightObj[i].links.video_link+'" frameborder="0" allowfullscreen></iframe>'+
        '<li id="back">&larr; Back to List</li></div>';


    document.getElementById('output').innerHTML = str;

    document.querySelector('#back').addEventListener('click', reload);
}

function reload() {
    location.reload(true);
}