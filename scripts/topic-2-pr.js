var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);

var myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  }
};
//different ways to access all properties
document.getElementById("test").innerHTML = Object.keys (myObj);
document.getElementById("test1").innerHTML = Object.getOwnPropertyNames(myHonda);
//access property
document.getElementById("test2").innerHTML = myHonda.engine.cylinders;


//methods

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
}}
document.getElementById("test3").innerHTML = person.fullName(); 