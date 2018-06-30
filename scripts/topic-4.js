window.addEventListener("load", getRank);
var pairsObj;

function getRank() {
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
            let pairs = JSON.parse(request.responseText);
            console.log(pairs);
            pairsObj=pairs;
            display(pairs);
            
        } //else {
        //     alert("Error: the request was not successful");
        // }
    };

    request.open("GET", "../topics/dressage.json", true);
    request.send();
}

function display(pairs) {
    
  //  var string = '<ol>';
    //for (let i=0; i<pairs.length; i++){
        //string +='<li>' + pairs[i].lastName + ' '+ pairs[i].firstName+ ' '+pairs[i].horse +'</li>';
    //}
    
//    string +="</ol>";
  //  document.getElementById('dressage').innerHTML = string;
    var output='<table>';
    output += '<tr>';
    output += '<th>Rider</th>';
    output += '<th>Horse</th>';
    output += '</tr>';
    for (let i=0; i<pairs.length; i++) {
        output += '<tr>';
        output += '<td>'+ pairs[i].lastName + ' '+ pairs[i].firstName+'</td>';
        output += '<td>'+ pairs[i].horse+'</td>';
        output += '</tr>';
    }
    output += '</table>';
    document.getElementById('dressage').innerHTML = output;
    
}




