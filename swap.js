// Swap two mumbers with each other //

// using normal function

function swapFunction(num1, num2) {

    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("Swapped answer: ", num1, num2);

}

console.log("Normal Function");

var a = 5;
var b = 7;
console.log("Normal answer: ", a, b);
swapFunction(a, b);


// using destruction function

function swapDestruction(num1, num2) {

    [num1, num2] = [num2, num1];
    console.log("Swapped answer: ", num1, num2);

}

console.log("Destruction Function");

var a = 12;
var b = 21;
console.log("Normal answer: ", a, b);
swapDestruction(a, b);

