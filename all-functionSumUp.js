//------------------ Problem 1 ---------------//

function seerToMon(seer) {

    // declaring error string
    const error1 = "Please provide number type value";
    const error2 = "Please provide positive number";

    // error or unexpected value checking
    if (typeof seer != 'number') {
        return error1;
    }

    else if (seer < 0) {
        return error2;
    }

    // converting seer to mon 
    else {
        const monValue = seer / 40;
        return monValue;
    }

}

const mon = seerToMon(70);
console.log(mon);





//------------------ Problem 2 ---------------//

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    // declaring error string 
    const errorMesssage1 = "Please, provide all number type value";
    const errorMesssage2 = "Please, provide all positive quantity.";


    // declaring shirt, pant and shoes per product value 
    const shirtValue = 100;
    const pantValue = 200;
    const shoeValue = 500;


    // error or unexpected value checking 
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
        return errorMesssage1;
    }

    else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return errorMesssage2;
    }

    // counting total selling for shirt, pant and shoes 
    else {
        const shirtValueTotal = shirtValue * shirtQuantity;
        const pantValueTotal = pantValue * pantQuantity;
        const shoeValueTotal = shoeValue * shoeQuantity;

        const totalValue = shirtValueTotal + pantValueTotal + shoeValueTotal;

        return totalValue;
    }

}
const total = totalSales(7, 4, 3);
console.log(total);





//------------------ Problem 3 ---------------//

function deliveryCost(tshirtQuantity) {

    // declaring error showing string 
    const errorShow1 = "Please, provide number type value";
    const errorShow2 = "Please, Provide positive value. Quantity can't be negative ";


    // declaring first 100 tshirt delivery cost, second 100 tshirt delivery cost and other tshirt delivery cost 
    const first100Shirt = 100;
    const second100Shirt = 80;
    const otherShirt = 50;


    // error or unexpected value checking 
    if (typeof tshirtQuantity != 'number') {
        return errorShow1;
    }

    else if (tshirtQuantity < 0) {
        return errorShow2;
    }


    // calculating toatl tshirt price for all cases
    else {

        // total shirt price for less than equal 100 tshirt quantity
        if (tshirtQuantity <= 100) {

            const tshirtPrice = tshirtQuantity * 100;

            return tshirtPrice;

        }

        // total shirt price for less than equal 200 tshirt quantity
        else if (tshirtQuantity <= 200) {

            const tshirtPrice100 = 100 * first100Shirt;
            const restShirt = tshirtQuantity - 100;
            const restShirtPrice = restShirt * second100Shirt;
            const tshirtPrice = tshirtPrice100 + restShirtPrice;

            return tshirtPrice;
        }

        // total shirt price for more than 200 tshirt quantity
        else {

            const tshirtPrice100 = 100 * first100Shirt;
            const tshirtPrice200 = 100 * second100Shirt;
            const restShirt = tshirtQuantity - 200;
            const restShirtPrice = restShirt * otherShirt;
            const tshirtPrice = tshirtPrice100 + tshirtPrice200 + restShirtPrice;

            return tshirtPrice;

        }
    }



}
const totalCost = deliveryCost(200);
console.log(totalCost);






//---------- Problem 4 --->Finding first string length of 5 --------//

function perfectFriend(names) {

    // declaring error showing string
    const errorType1 = "Please, provide object type data";
    const errortype2 = "provide value properly";

    //checking whether input is object or not.
    if (typeof names == 'object') {

        // checking all elements of names(object) 
        for (const element of names) {

            if (element.length == 5) {
                return element;
            }

        }

        // if there is no string of length 5 or wrong object
        return errortype2;
    }

    // error or unexpected value handling 
    else {
        return errorType1;
    }

}

const friendsNames = ["tonmoy", "peom", "salma", "mahdi", "alim", "badon"];
const resultedName = perfectFriend(friendsNames);
console.log(resultedName);
