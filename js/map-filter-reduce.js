const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);
// const housesTwoBedPlus = houses.filter(house => {
//     return parseFloat(house.beds) >= 2;
// })
// console.log(housesTwoBedPlus);
// // 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// const result = users.filter(user => {
//     return user.languages.length >= 3;
// });
const result = users.filter(user => user.languages.length >= 3);
console.log(result);

//  2.   Use .map to create an array of strings where each element is a user's email address
const resultTwo = users.map(user => {
    return user.email;
})
console.log(resultTwo);
// 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const resultThree = users.reduce((accumulator, user, index) => {
    return accumulator += user.yearsOfExperience;

}, 0);
console.log(resultThree);
//  4.   Use .reduce to get the longest email from the list of users.
const largestEmail = users.reduce((accumulator, user, inder) => {
    let emailLength = user.email.length;
    let accumulatorLength = accumulator.length;
    if (emailLength > accumulatorLength){
        accumulator = user.email;
    }
    return accumulator;
}, users[0].email);
console.log(largestEmail);
//   5.  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((accumulator, user, index) => {
    return `${accumulator}${user.name},`;
}, '');
console.log('your teacher are', userNames);

// Use .reduce to get the unique list of languages from the list of users. -- bonus
// const languages = users.reduce((accumulator, user, index) => {
//     return accumulator + user.languages;
// }, '');
// console.log(languages);