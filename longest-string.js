// Find Longest String 

function longestString(names) {
    longestName = "";
    for (const element of names) {
        if (element.length > longestName.length) {
            longestName = element;
        }
    }
    return longestName;
}

const friendsNames = ["Peom Dutta", "Mahdi Hassan Khan", "Alim Jawra", "Badhan"];
const longest = longestString(friendsNames);
console.log(longest);