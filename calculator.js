function addition() {
    //This is the addition function that adds the first number to the second number
    let num1= document.getElementById("first-number").value;
    let num2= document.getElementById("second-number").value;
    let result;
     result = Number(num1) + Number(num2);

    if (result < 0) {
        document.getElementById('output').style.color="red";

    } else{
        document.getElementById('output').style.color=" black";

    }
    //displays the results in the output
    document.getElementById("output").innerHTML = "Answer: " + result;
}

function subtraction() {
    //This is the subtraction function that subtracts the first number to the second number
    let num1= document.getElementById("first-number").value;
    let num2= document.getElementById("second-number").value;
    let result;
     result = Number(num1) - Number(num2);
    if (result < 0) {
        document.getElementById('output').style.color="red";

    } else{
        document.getElementById('output').style.color=" black";

    }
    //displays result in the output
    document.getElementById("output").innerHTML = "Answer: " + result;
}

function multiplication() {
    //This is the multiplication function that multiplies the first number to the second number
    let num1= document.getElementById("first-number").value;
    let num2= document.getElementById("second-number").value;
    let result;

    result = Number(num1) * Number(num2);
    if (result < 0) {
        document.getElementById('output').style.color="red";

    } else{
        document.getElementById('output').style.color=" black";

    }
    //displays result in the output
    document.getElementById("output").innerHTML = "Answer: " + result;
}
function division() {
    //This is the division function that divides the first number to the second number
    let num1= document.getElementById("first-number").value;
    let num2= document.getElementById("second-number").value;
    let result;
    if (num2 === '0'){
        document.getElementById('output').innerHTML = 'CANNOT DIVIDE BY ZERO!!!';

    }else {
        result = Number(num1) / Number(num2);



    }

    if (result < 0) {

        document.getElementById('output').style.color=" red";

    } else{
        document.getElementById('output').style.color=" black";

    }
    //displays result in the output
    document.getElementById("output").innerHTML = "Answer: " + result;


}
function powerbutton(){
    //This is the power function that powers the first num with the second num the first number to the second number
    let num1= document.getElementById("first-number").value;
    let num2= document.getElementById("second-number").value;
    let result =1;
    for (let i=0; i<Number(num2);i++) {
        result *= Number(num1);
    }
    if (result < 0) {
        document.getElementById('output').style.color="red";

    } else{
        document.getElementById('output').style.background="black";

    }
    //displays result in the output
    document.getElementById("output").innerHTML = "Answer: " + result;



}
function clearall(){
    //Clearing all input and output
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = "Answer: ";
    document.getElementById('output').style.color = 'black';
}
