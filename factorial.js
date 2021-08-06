// Find the Factorial of a number

function factorial(n) {

    var fact = 1;

    for (var i = 1; i <= n; i++) {
        fact = fact * i;
        console.log(fact);
    }
    return fact;
}


var result = factorial(5);
console.log("The result is: ", result);
