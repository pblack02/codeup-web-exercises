"use strict"
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
const names = ["Presley", "Bob", "Alex", "Pat"];

//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
console.log(names);


//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// a for of loop that does the same as above.

// for (const name of names){
// console.log(name);
// }

//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */

names.forEach((name) => {
    console.log(name);
});

//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5

const numberArray = [1, 2, 3, 4, 5];

function first(array) {
    console.log(array[0]);
}

first(numberArray)

function second(array) {
    console.log(array[1]);
}

second(numberArray);

function last(array) {
    console.log(array[numberArray.length - 1]);
}

last(numberArray);