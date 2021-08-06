// Find the minimum value from an Array

function minArray(numbers) {

    var min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

var arrayNumbers = [10, 21, 4, 13, 19];
var result = minArray(arrayNumbers);
console.log("Minimum value is: ", result);