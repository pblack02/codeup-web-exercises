"use strict";

let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

// /**
//  * TODO:
//  * Convert planetsString to an array, and save it in a variable named
//  * planetsArray.
//  * console.log planetsArray to check your work
//  */
let planetsArray = planetsString.split("|");
console.log(planetsArray);

// /**
//  * TODO:
//  * Create a string with <br> tags between each planet. console.log() your
//  * results. Why might this be useful?

let stringBreak = "black <br> white <br> brown";
console.log(stringBreak);

//  * BONUS:
//  * Create another string that would display your planets in an undordered
//  * list. You will need an opening AND closing <ul> tags around the entire
//  * string, and <li> tags around each planet.
//  */
// let arrayTwo = ["a","b","c",]
// let arrayList = [ planetsArray, arrayTwo];
// function makeUL(array){
//     let list = document.createElement('ul');
//     console.log(list);
//     for ( let i = 0; i < array.length; i++){
//         let item = document.createElement('li');
//         item.appendChild(document.createTextNode(array[i]));
//         list.appendChild(item);
//     }
//     return list;
// }
// // document.getElementById(arrayList.appendChild(makeUL([planetsArray])));
//
// console.log(makeUL(arrayList[planetsArray]));
