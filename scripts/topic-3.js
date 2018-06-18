



function createItem() {
var name = document.getElementById("name").value
var kind = document.getElementById("kind").value;
var age = parseFloat(document.getElementById("age").value);
var color = document.getElementById("color").value;
    var item = {
    name: name,
    kind: kind,
    age: age,
    color: color,
};    
var output = JSON.stringify(item);
console.log(item);
    //var output = "{"+'"name"'+ ": " +'"'+ name+'"' + ","+'"kind"'+": " +'"'+ kind+'"'+ ","+ '"age"' +": "+'"'+ age+'"'+ ", "+'"color"'+": " +'"'+color+'"' +"}";
//localStorage.setItem("output", output);
//var strOutput = localStorage.getItem("output");
document.getElementById("outputString").innerHTML = output;
    return output;
}
function convertItem(){
    output = JSON.parse(createItem());
    console.log(output);
    return output
}
function getName(){
    var item = convertItem();
    document.getElementById("outputName").innerHTML = item.name;
    
}
function getKind(){
    var item = convertItem();
    document.getElementById("outputKind").innerHTML = item.kind;
    
}
function getAge(){
    var item = convertItem();
    document.getElementById("outputAge").innerHTML = item.age;
    
}
function getColor(){
    var item = convertItem();
    document.getElementById("outputColor").innerHTML = item.color;
    
}