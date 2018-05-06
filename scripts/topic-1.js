function doInputOutput() {
let firstNumber = parseInt(document.getElementById('first').value);
let lastNumber = parseInt(document.getElementById('last').value); 
let result = calculation(firstNumber, lastNumber);

document.getElementById('outputDiv').innerHTML = result;
}






function calculation(fNumber, lNumber) {
       let sum=0;   
    for (let i = 0; i < lNumber; i++) {
        sum += fNumber+i;

                }
    return sum;
    
}


    

