// Print the Fibonacci Series


function fibonacci(numbers) {

    var fibo1 = 0;
    var fibo2 = 1;
    var fibo = fibo1 + fibo2;
    var fibonacciOutput = [0, 1]

    for (let i = 2; i < numbers; i++) {
        console.log(fibo);
        fibonacciOutput.push(fibo);
        fibo1 = fibo2;
        fibo2 = fibo;
        fibo = fibo1 + fibo2;
    }
    return fibonacciOutput;

}

var num = 8;
var result = fibonacci(num);
console.log(result);