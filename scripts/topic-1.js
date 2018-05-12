function doInputOutput() {
let firstNumber = parseInt(document.getElementById('first').value);
let lastNumber = parseInt(document.getElementById('last').value);
if (document.getElementById('sum').checked == true) {
var result = sum(firstNumber, lastNumber);    
}else {
var result = average(firstNumber, lastNumber);   
}
    
document.getElementById('outputDiv').innerHTML = result;
}

function sum(fNumber, lNumber) {
       let sum=0;   
    for (let i = 0; i < lNumber; i++) {
        sum += fNumber+i;

                }
    return sum;
    
}

function average (fNumber, lNumber){
    let suma=0;
    let avr=0;
    let array = [];
    for(let j=0; j<lNumber; j++){
     array.push(fNumber);   
    }
    
    for (let i = 0; i < lNumber; i++) {
        suma += fNumber+i;
        avr = suma/array.length;

                }
    return avr;
    
    
    
}


    

