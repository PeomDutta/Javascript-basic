// Find the minimum value from three values

function max(num1, num2, num3) {

    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else
        return num3

}

var a = 10;
var b = 21;
var c = 15;
var result = max(a, b, c);
console.log("The smallest number is: ", result);