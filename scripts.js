// const createInstructor = (firstName, lastName) => {
//     return {firstName, lastName}
// };

// const instructor = {
//     firstName: "Christian",
//     sayHi(){
//         return "hi"
//     },
//     sayBye(){
//         return this.firstName + " says bye"
//     }
// }

// const favoriteNumber = 42;
// const instructor ={
//     firstName: "Colt",
//     [favoriteNumber]: "That is my favorite"
// };

// function createAnimal (specie, verb, noise){
//     return {
//         specie,
//         [verb](){
//             return noise;
//         }
//     }
// }

// DESTRUCTURING ::::
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like Purple
//   getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
//   getUserData({}) // Your name is undefined and you like green

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // Raindrops on roses
//   console.log(whiskers); // Whiskers on kittens
//   console.log(aFewOfMyFavoriteThings); // Bright copper kettles, warm woolen mittens, brown paper packages tied up with strings

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // 10, 30, 20

// const numbers = {
//     a: 1,
//     b: 2,
// };
// let {a, b} = numbers;

// const arr = [1, 2];
// [arr[0], arr[1]] = [arr[1], arr[0]];

// function raceResults (arr) {
//     return {
//         first: arr[0],
//         second: arr[1],
//         third: arr[2],
//         rest: arr.slice(3)
//     };
// }
// // i didn't read the requirements correctly::

// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})