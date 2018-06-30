window.addEventListener("load", getRank);


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
            let pair = JSON.parse(request.responseText);
            console.log(pair);
            
        } //else {
        //     alert("Error: the request was not successful");
        // }
    };

    request.open("GET", "../topics/dressage.json", true);
    request.send();
}





