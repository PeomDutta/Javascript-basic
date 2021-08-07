// Remove duplicate elements from an Array

function removeDuplicates(names) {

    var unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;

}

const arrayName = ["peom", "mahdi", "alim", "badhan", "alim"];
const finalArrayName = removeDuplicates(arrayName);
console.log(finalArrayName);
