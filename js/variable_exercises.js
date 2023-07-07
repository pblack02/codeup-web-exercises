// exercise 3.1
let pricePerDayDollar = 3;
let BrotherBearDays = 5;
let HerculesDays = 1;
let littleMermaidDays = 3;
let movieTotal = (BrotherBearDays + HerculesDays + littleMermaidDays) * pricePerDayDollar;

// exercise 3.2
let googlePay = 400 * 6;
let amazonPay = 380 * 4;
let facebookPay = 350 * 10;
let totalPayForWeek = googlePay + amazonPay + facebookPay;

// " magical numbers in code", if someone else see code would they know what the numbers are for?



// // exercise 3.3
// let ClassNotFull = true
// let noClassConflict = true
//
// if( ClassNotFull
//       console.log('Good to go!');
//      else {
//       console.log('No go');
// })

// let canenroll = classnotfull === true && noClossConflict === true;


// exersice 3.4

// Write a function, sumIsEqual, that takes in three inputs. The function should return
// true if the sum of the first two inputs are equal to the third input. If any of the
// inputs are not numbers, return false.
//
// sumIsEqual(1, 2, 3) // returns true
// sumIsEqual(2, 2, 4) // returns true
// sumIsEqual(10, 2, 12) // returns true
// sumIsEqual(10, false, 12) // returns false
// sumIsEqual('10', '2', 12) // returns false
// sumIsEqual('fred', 'bob, 'hello') // returns false
function isANumber(num) {
    if (typeof num === 'number') {
        return true;
    } else {
        return false;
    }
}
function sumOfEqual (num1, num2, num3){
    if (isANumber(num1), isANumber(num2),isANumber(num3)){
        return true;
    } else {
        return
    }
}

console.log(sumIsEqual(1, 2, 3)) // returns true
console.log(sumIsEqual(2, 2, 4)) // returns true
console.log(sumIsEqual(10, 2, 12))// returns true
console.log(sumIsEqual(10, false, 12)) // returns false

// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.


function returnProduct ([num1,num2, num3]){
    if (isANumber([num1, num2, num3])) {
        let sum = num1 * num2 * num3
        return sum;
    } else {
        return false;
    }
}
returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30

// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
//     EXAMPLE...
//
const salesData = [
    {
        month: 'January',
        totalItemsSold: 0
    },
    {
        month: 'February',
        totalItemsSold: 5
    },
    {
        month: 'March',
        totalItemsSold: 2
    },
    {
        month: 'April',
        totalItemsSold: 10
    },
    {
        month: 'May',
        totalItemsSold: 30
    }
];

let sum = salesData.reduce(function(a, b){
    return a + b;
});

console.log(sum);

// returnTotalSales(salesData) // returns 47
