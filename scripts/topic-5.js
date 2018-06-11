

function saveData() {
var name = document.getElementById("firstName").value;
var email = document.getElementById("email").value;
localStorage.setItem("name", name);
localStorage.setItem("email", email);
}

function getData(){
    document. getElementById("getName").innerHTML = localStorage.getItem ("name");
    document. getElementById("getEmail").innerHTML = localStorage.getItem ("email");
}

var users = new Array();
users.push('Irena', 'Michael', 'Thomas');
localStorage.setItem("users", JSON.stringify(users));
var retrievedData = localStorage.getItem("users");
var users2 = JSON.parse(retrievedData);
//alert(users2.length);
document.getElementById("array").innerHTML = users2;


function addItem() {
var users = new Array();
users.push('Irena', 'Michael', 'Thomas');
var newItem = document.getElementById("newItem").value;
users.push(newItem);
localStorage.setItem("users", JSON.stringify(users));
var retrievedData = localStorage.getItem("users");
var users2 = JSON.parse(retrievedData);
//alert(users2.length);
document.getElementById("array").innerHTML = users2;
}
 function getArrayItem() {
 var users = new Array();
users.push('Irena', 'Michael', 'Thomas');
 var newItem = document.getElementById("newItem").value;
users.push(newItem);
localStorage.setItem("users", JSON.stringify(users));
var retrievedData = localStorage.getItem("users");
var users2 = JSON.parse(retrievedData);
var number = parseInt(document.getElementById("number").value);
document.getElementById("arrayItem").innerHTML = users2[number-1];   
 }



var me = {'fullName': 'Irena', 'Address': 'Ukraine', 'gender': 34};
localStorage.setItem("user", JSON.stringify(me));
var meAgain = JSON.parse(localStorage.getItem("user"));
document.getElementById("object").innerHTML = meAgain['Address'];



