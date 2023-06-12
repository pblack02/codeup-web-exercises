// Write a function that takes two numbers as parameters and returns the larger of the two.
function largerNumber(num1, num2){
    return Math.max(parseInt(num1), parseInt(num2))
}

console.log(largerNumber(8, 9));

//     Create a function that checks whether a given number is even or odd. It should return "Even" or "Odd" accordingly.

function oddOrEven(num){
    if(num % 2 == 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(oddOrEven(6));
console.log(oddOrEven(13));

//     Write a function that accepts a string as input and checks if it starts with an uppercase letter. Return true if it does; otherwise, return false.

function ifUpperCase(string){
    if (string.charAt(0) === string.charAt().toUpperCase()){
        return true;
    } else {
        return false;
    }
}

console.log(ifUpperCase("My favorite color is blue"));
console.log(ifUpperCase("my favorite color is blue"));

//     Create a function that calculates the sum of all numbers from 1 to a given positive integer.



//     Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.



//     Implement a function that takes a temperature in Celsius and converts it to Fahrenheit.


//     Create a function that accepts an array of strings and returns a new array containing only the strings with more than five characters.


//     Write a function that determines if a given year is a leap year. It should return true if it is a leap year; otherwise, return false.


//     Implement a function that reverses a given string. For example, if the input is "hello," the function should return "olleh".


//     Write a function that accepts three parameters: a number, a lower bound, and an upper bound. The function should check if the number falls within the range defined by the lower and upper bounds. Return true if it does; otherwise, return false.


function isANumber(num) {
    if (typeof num !== 'number') {
        return true;
    } else {
        return false;
    }
}
function sumOfEqual (num1, num2, num3) {
    if (isANumber(num1), isANumber(num2), isANumber(num3)) {
            return false;
        } else {
            return num1 + num2 === num3;
        }
}

console.log(sumOfEqual(1, 2, 3)) // returns true
console.log(sumOfEqual(2, 2, 4)) // returns true
console.log(sumOfEqual(10, 2, 12))// returns true
console.log(sumOfEqual(10, false, 12)) // returns false

// lecture example
//
// function sunIsEqual(input1, input2, input3){
//     if (typeof input1 !== 'number' || typeof input2 !== 'number' || typeof input3 !== 'number'){
//         return false;
//     }
//     return input1 + input2 === input3;
// }