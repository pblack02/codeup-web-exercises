"use strict"
// #2 Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(input){
    for (let i = 1; i <= 10; ++i){
        console.log(`${input} x ${i} = ${input * i}`);
    }
}
showMultiplicationTable(7);

// #3  Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even

function randomEvenorOdd(){
    for(let i = 0; i < 10; i ++){
        const randomNumber = Math.floor(Math.random()* (200 - 20) + 1) + 20;
        if (randomNumber % 2 === 0){
            console.log(randomNumber + " is even");
        } else{
            console.log(randomNumber + " is odd");
        }
    }
}

randomEvenorOdd();

// #4 Create a for loop that uses console.log to create the output shown below.
for(let i = 1; i < 10; i++){
    console.log(i.toString().repeat(i));
}

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// #5
for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}