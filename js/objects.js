"use strict";
//
// /**
//  * TODO:
//  * Create an object with firstName and lastName properties that are strings
//  * with your first and last name. Store this object in a variable named
//  * `person`.
const person = {
    firstName: "Presley",
    lastName: "Black"
};
console.log(person.firstName);
console.log(person.lastName);


// /**
//  * TODO:
//  * Add a sayHello method to the person object that returns a greeting using
//  * the firstName and lastName properties.
//  * console.log the returned message to check your work

person.sayHello = function (){
    return (`Hello from ${person.firstName} ${person.lastName}`);
}

console.log(person.sayHello());



//  * Example
//  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//  */
//
// /** TODO:
//  * HEB has an offer for the shoppers that buy products amounting to
//  * more than $200. If a shopper spends more than $200, they get a 12%
//  * discount. Write a JS program, using conditionals, that logs to the
//  * browser, how much Ryan, Cameron and George need to pay. We know that
//  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//  * display a line with the name of the person, the amount before the
//  * discount, the discount, if any, and the amount after the discount.
//  *
//  * Uncomment the lines below to create an array of objects where each object
//  * represents one shopper. Use a foreach loop to iterate through the array,
//  * and console.log the relevant messages for each person




 let shoppers = [
     {name: 'Cameron', amount: 180},
     {name: 'Ryan', amount: 250},
     {name: 'George', amount: 320}
];
 function hebDiscount (name,amount){
     if (amount > 200){
         let discountAmount = amount * 0.88;
         return (`hello ${name} amount before discount ${amount} after discount ${discountAmount}`);
     } else {
         return (`Hello ${name} sorry no discount total amount due ${amount}`);
     }
 }
 shoppers.forEach(function (shoppers){
    console.log(hebDiscount(shoppers.name, shoppers.amount));
})


//
// /** TODO:
//  * Create an array of objects that represent books and store it in a
//  * variable named `books`. Each object should have a title and an author
//  * property. The author property should be an object with properties
//  * `firstName` and `lastName`. Be creative and add at least 5 books to the
//  * array

let books = [
    {title:'Do you Like Green Eggs and Ham', author: {
        firstname:'Doctor',
        lastname:'Sues'
        }},
    {title: 'The Ugly Duckling', author:{
        firstname: 'Hans',
        lastname: 'Anderson'
        }},
    {title: 'The Lord of the Rings', author:{
        firstname:'J.R.R',
        lastname:'Tolkien'
        }},
    {title: 'To Kill a Mockingbird', author:{
        firstname:'Harper',
        lastname:'Lee'
        }},
    {title: 'Wuthering Heights', author:{
        firstname:'Emily',
        lastname:'Bronte'
        }},
    {title: 'The Catcher in the Rye', author:{
        firstname:'J.D',
        lastname:'Salinger'
        }}
]



// array.push({})- to add a object to an array.
books.forEach(function (books){
    console.log("Title: " + books.title + " Author: " + books.author.firstname, books.author.lastname);
})

//  * Example:
//  * > console.log(books[0].title) // "The Salmon of Doubt"
//  * > console.log(books[0].author.firstName) // "Douglas"
//  * > console.log(books[0].author.lastName) // "Adams"
//  */

// /**
//  * TODO:
//  * Loop through the books array and output the following information about
//  * each book:
//  * - the book number (use the index of the book in the array)
//  * - the book title
//  * - author's full name (first name + last name)
//  *
books.forEach(function (book, index){
     console.log(`book #${index + 1}`);
     console.log(`title ${book.title}`);
     console.log(`Author: ${book.author.firstname} ${book.author.lastname}`);
     if (index < books.length - 1) console.log("---");
})

//  * Example Console Output:
//  *
//  *      Book # 1
//  *      Title: The Salmon of Doubt
//  *      Author: Douglas Adams
//  *      ---
//  *      Book # 2
//  *      Title: Walkaway
//  *      Author: Cory Doctorow
//  *      ---
//  *      Book # 3
//  *      Title: A Brief History of Time
//  *      Author: Stephen Hawking
//  *      ---
//  *      ...
//  */
//
// /**
//  * Bonus:
//  * - Create a function named `createBook` that accepts a title and author
//  *   name and returns a book object with the properties described
//  *   previously. Refactor your code that creates the books array to instead
//  *   use your function.

function createBook(title, author){

}

//  * - Create a function named `showBookInfo` that accepts a book object and
//  *   outputs the information described above. Refactor your loop to use your
//  *   `showBookInfo` function.
//  */