const link = document.getElementById('output');
window.addEventListener("load", getList);
link.addEventListener("click", getFlight);
const back = document.getElementById('back');
const aboutCompany =  document.getElementById('aboutCompany');
aboutCompany.addEventListener("click", getInfo);
const home = document.getElementById('home');
home.addEventListener ("click", reload);
const history = document.getElementById('history');
history.addEventListener ("click", getHistory);
const lastFlight = document.getElementById('lastFlight');
lastFlight.addEventListener ("click", getLastFlight);
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

function getInfo() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
            //alert("4.Responce has been sent and is ready to process");
            let info = JSON.parse(request.responseText);
            console.log(info);
            displayInfo(info);
            
            
            
        } 
    };

    request.open("GET", "https://api.spacexdata.com/v2/info", true); 
    request.send();
}

function getHistory() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
            //alert("4.Responce has been sent and is ready to process");
            let hstr = JSON.parse(request.responseText);
            console.log(hstr);
            displayHistory(hstr);
            
        } 
    };

    request.open("GET", "https://api.spacexdata.com/v2/info/history", true); 
    request.send();
}


function displayInfo(info) {
    
     
    let str = '<div id="background1">' +
    '<ul>' + 
        '<li class="info"> Company Name: ' +info.name + '</li>' +
        '<li class="info"> Founder and CEO: ' +info.founder + '</li>' +
        '<li class="info"> Chief Technology Officer: ' +info.cto + '</li>' +
        '<li class="info"> Propulsion Chief Technology Officer: ' +info.cto_propulsion + '</li>' +
        '<li class="info"> Year of Foundation: ' +info.founded + '</li>' +
        '<li class="info"> Employees: ' +info.employees + '</li>' +
        '<li class="info"> Address: ' +info.headquarters.address +', '+ info.headquarters.city +', ' + info.headquarters.state +', ' + '</li>' +
        '<li class="info"> Summary: ' +info.summary + '</li>' +
        '</ul></div>';


    document.getElementById('info').innerHTML = str;

    
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

function displayHistory(hstr) {
    
}

function getFlight() {
    let i = event.target.getAttribute("data-number");
    localStorage.setItem("flight", JSON.stringify(flightObj[i]));
    console.log(flightObj[i].url);
    let str = '<div id="background">' +'<img src="'+flightObj[i].links.mission_patch_small+'" alt="picture of the flight">'+
    '<ul>' + 
        '<li class="info"> Mission Name: ' +flightObj[i].mission_name + '</li>' +
        '<li class="info"> Launch Year: ' + flightObj[i].launch_year + '</li>' +
        '<li class = "info"> Launch Date(UTC): '+ flightObj[i].launch_date_utc + '</li>' +
        '<li class = "info"> Rocket Name: '+ flightObj[i].rocket.rocket_name + '</li>' +
        '<li class="info"> Details: ' + flightObj[i].details + '</li>'+
        '</div>';


    document.getElementById('output').innerHTML = str;

    document.querySelector('#back').addEventListener('click', reload);
}

function getLastFlight() {
    
    var flightObj= JSON.parse(localStorage.getItem("flight"));
    
    let str = '<div id="background">' +'<img src="'+flightObj.links.mission_patch_small+'" alt="picture of the flight">'+
    '<ul>' + 
        '<li class="info"> Mission Name: ' +flightObj.mission_name + '</li>' +
        '<li class="info"> Launch Year: ' + flightObj.launch_year + '</li>' +
        '<li class = "info"> Launch Date(UTC): '+ flightObj.launch_date_utc + '</li>' +
        '<li class = "info"> Rocket Name: '+ flightObj.rocket.rocket_name + '</li>' +
        '<li class="info"> Details: ' + flightObj.details + '</li>'+
        '</div>';


    document.getElementById('output').innerHTML = str;

    document.querySelector('#back').addEventListener('click', reload);
}

function reload() {
    location.reload(true);
}
document.querySelector('#aboutCompany').addEventListener('click', e => {
  var menu = document.querySelector('#menu');
  if (menu.hasAttribute('open')) {
    menu.removeAttribute('open');
    
    
  }
  else {
    menu.setAttribute('open', '');
    
      }
})

