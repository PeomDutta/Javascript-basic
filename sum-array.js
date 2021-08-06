// Find the total sum of an Array

function sumArray(numbers) {

    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;

}

var num = [4, 8, 10, 16];
var sum = sumArray(num);
console.log("Total sum of array is: ", sum);