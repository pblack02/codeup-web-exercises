"use strict"
let i = 2
while (i <= 65536){
    console.log(i);
    i *= 2
}
// function doubleInput(num){
//     while (true){
//         console.log(num);
//         num *= 2;
//         if (num <= 66000); break;
//     }
// }
// doubleInput(2);

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let someCones = Math.floor(Math.random() * 5) + 1;
    if (allCones - someCones < 0) {
        console.log(`i can't sell ${someCones} cones, i only have ${allCones} left`);
        continue;
    } else if (allCones - someCones === 0) {
        console.log("yay! i sold them all!");
        break;
    } else {
        console.log(`${someCones} cones sold`);
        allCones -= someCones
    }
    console.log(`I now have ${allCones} cones left`);
} while(allCones > 0);