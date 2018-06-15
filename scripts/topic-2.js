//creation of a class
function Clothes (size, price, type, fabrik) {
    this.size = size;
    this.price = price;
    this.type = type;
    this.fabrik = fabrik;
    this.description = function() {
        return this.type +":" + " size " + this.size + ", price $" + this.price + ".";}
    this.descriptionV = function() {
        return this.type +":" + " size " + this.size + ", price $" + this.price + ", " + this.vendor+".";
}
        
}
//subclass created by a user
var items = [];
function createItem() {
var size = document.getElementById("size").value
var type = document.getElementById("type").value;
var price = parseFloat(document.getElementById("price").value);
var fabric = document.getElementById("fabric").value;
var item = new Clothes (size, price, type, fabric);

items.push(item);
console.log(items);
display(items);
}

function display(items){
    let output="<ul>";
    for(let i=0; i<items.length; i++){
    let item = items[i];
    output += '<li>' + item.description(); 
    }
    output += '</ul>'; 
    document.getElementById("test").innerHTML = output;

}

//subclass created by an author
var dressA = new Clothes ("S", 10, "dress", "silk");
var dressB = new Clothes ("M", 10, "dress", "silk");
console.log(dressA.description());
console.log(dressB.description());
//In case we want to add a new property to the Clothes object we need to add in inside the Clothes function or we can do it in the following way:
Clothes.prototype.vendor = "Benneton";
var dressC = new Clothes ("L", 10, "dress", "silk");
//show that a new property exists in a subclass
console.log(dressC.vendor);
//call a new method to show a new property of the class
console.log(dressC.descriptionV());






