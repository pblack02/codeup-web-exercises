"use strict"

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');

let userReasponse= prompt('What is your favorite color?');
alert('I like' + (userReasponse) + 'too!');
console.log(userReasponse)

// Movie Rental
//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//If price for a movie per day is $3, how much will you have to pay?

let dailyRentalRateDollars = prompt('How much money per day?')

let littleMermaidDaysRented = prompt('Little Mermaid Days rented?')
let brotherBearDaysRented = prompt('Brother Bear Days rented?')
let herculesDaysRented = prompt('Hercules Days rented?')

let rentalTotalCost;
rentalTotalCost = alert( parseInt(littleMermaidDaysRented) + parseInt(brotherBearDaysRented) + parseInt(herculesDaysRented) * parseInt(dailyRentalRateDollars));

console.log(rentalTotalCost);

// Contractor
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
//they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googleHourlyRateDollars = prompt('Hourly rate for Google');
let amazonHourlyRateDollars = prompt('Hourly rate for Amazon');
let facebookHourlyRateDollars = prompt('Hourly rate for Facebook');

let googleHours = prompt('How many hours did you work for Google this week?');
let amazonHours = prompt('How many hours did you work for Amazon this week?' );
let facebookHours = prompt('How many hours did you work for Facebook this week?');

let totalPayment;

totalPayment = alert(parseInt(googleHours * googleHourlyRateDollars));
totalPayment += alert(parseInt(amazonHours * amazonHourlyRateDollars));
totalPayment += alert(parseInt(facebookHours * facebookHourlyRateDollars));

// Student Enrollment
//A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

let classIsNotFull; // boolean
let classScheduleDoesNotConflict; // boolean
let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
let userEnrolledResponse = confirm("Is the class full?");
if (userEnrolledResponse === false) {
    alert("Proceed to next question");
} else {
    alert("Student may not enroll in course.");
}
let userConflictResponse= confirm("Are there any scheduling conflicts?");
if (userConflictResponse === false) {
    alert("Student may enroll in the course.")
} else {
    alert("Student may not enroll in the course.")
}



// Product Offer
//A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//Use the following code to follow the instructions below:

let theOfferExpired = confirm("is the offer still valid? cancel for no");
if(theOfferExpired){
    let RegularMember = confirm("are you a regular member? cancel for no");
    let ItemOffer = 2;
    let customerBuys = prompt("how much items did you buy");
    parseInt(customerBuys);
    if (RegularMember){
        if(customerBuys >= ItemOffer){
            alert("you are eligible for the offer!");
        }else{
            alert("You aren't eligible for the offer");
        }
    }
    if(!RegularMember) {
        alert("You're a Premium Member and are eligible for the product offer");
    }
}else{
    alert("the offer is expired");
}













