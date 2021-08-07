// Count total numbers of paper for 3 book 

function countPaper(bookOneQuantity, bookTwoQuantity, bookThreeQuantity) {

    const bookOnePage = 100;
    const bookTwoPage = 200;
    const bookThreePage = 300;

    var bookOneTotal = bookOnePage * bookOneQuantity;
    var bookTwoTotal = bookTwoPage * bookTwoQuantity;
    var bookThreeTotal = bookThreePage * bookThreeQuantity;

    var totalBookPage = bookOneTotal + bookTwoTotal + bookThreeTotal;

    return totalBookPage;

}


const bookOneQuantity = 3;
const bookTwoQuantity = 1.5;
const bookThreeQuantity = 1;

var result = countPaper(bookOneQuantity, bookTwoQuantity, bookThreeQuantity);
console.log("Total Page needed is: ", result);