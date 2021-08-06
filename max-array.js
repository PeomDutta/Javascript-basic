// Find the maximum value from an Array

function maxArray(numbers) {

    var max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

var arrayNumbers = [10, 21, 24, 5, 19];
var result = maxArray(arrayNumbers);
console.log("Maximum value is: ", result);

