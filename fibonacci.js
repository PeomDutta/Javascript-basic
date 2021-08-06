// Print the Fibonacci Series


function fibonacci(numbers) {

    var fibo1 = 0;
    var fibo2 = 1;
    var fibo = fibo1 + fibo2;

    for (let i = 2; i < numbers; i++) {
        console.log(fibo);
        fibo1 = fibo2;
        fibo2 = fibo;
        fibo = fibo1 + fibo2;
    }

}

var num = 8;
fibonacci(num);