// Reverse a String using function

function reverseString(text) {
    let reversedText = "";
    for (const element of text) {
        reversedText = element + reversedText;
    }
    return reversedText;
}

const greetings = "Hello Peom, how are you?";
const reverse = reverseString(greetings);
console.log(reverse);