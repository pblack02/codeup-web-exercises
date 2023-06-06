"use strict"
let userPrompt
do {
    userPrompt = prompt("Please enter an odd number between 1-50?");
    if (userPrompt <= 0 || userPrompt >= 51 || userPrompt % 2 ===0){
        alert("Number is not in a acceptable range, please try again.");
    }
    else
        break;
} while (userPrompt <=0 || userPrompt >= 51 || userPrompt % 2 === 0);
for (let i = 1; i<=51; i +=2) {
    if (i === parseInt(userPrompt)) {
        console.log('Yikes! Skipping over: ' + userPrompt);
        continue;
    } else {
        console.log("this is an odd number " + i);
    }
}