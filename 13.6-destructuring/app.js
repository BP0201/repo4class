let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
// 2.
let planetFacts = {
    numPlanets1: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets1, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
  // 3.
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
  getUserData({}) // Your name is undefined and you like green
  // 4.
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"
// 5.
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
  // 6.
  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [20,10,30]
// 7.
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;
  // becomes
  let obj1 = {
      numbers: {
          a1: 1,
          b1: 2
      }
  }
  let {numbers: {a1}} = obj1
  let {numbers: {b1}} = obj1
  // 8.
  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
// becomes
let a2 = 1
let b2 = 2
let arr1 = [a2,b2]
[a2,b2] = [b2,a2]
// 9.
function raceResults([first, second, third, ...rest]){
    return {
        first, second, third, rest
    }
}
// as a one liner -->
const raceResults2 = ([first,second,third,...rest]) => ({first,second,third,rest})
