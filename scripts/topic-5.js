// Store
localStorage.setItem("lastname", "Kyman");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

function saveData() {
var name = document.getElementById("firstName").value;
var email = document.getElementById("email").value;
localStorage.setItem("name", name);
localStorage.setItem("email", email);
}

var users = new Array();
users.push('Irena', 'Michael', 'Thomas');
localStorage.setItem("users", JSON.stringify(users));
var retrievedData = localStorage.getItem("users");
var users2 = JSON.parse(retrievedData);
alert(users2.length);
document.getElementById("array").innerHTML = users2[1];

var me = {'fullName': 'Irena', 'Address': 'Ukraine', 'gender': 34};
localStorage.setItem("user", JSON.stringify(me));
var meAgain = JSON.parse(localStorage.getItem("user"));
document.getElementById("object").innerHTML = meAgain['Address'];



