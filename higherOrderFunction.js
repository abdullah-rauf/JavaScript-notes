// higher-order functions are functions that can take other functions as arguments or return a function as their result. This is a powerful feature that allows for more abstract and flexible code. Higher-order functions are widely used in functional programming and can help in creating cleaner, more modular code.

// higher order functions woh functions huty hain jin ko other function as an argument or return another function as their result 

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];

// map() function is a higher-order function that applies a given function to each element of an array and returns a new array with the results.
arr2 = arr1.map( (item) => item = item * 2)
console.log(arr2)

// filter method ekk new array create krta hai provided by the callback function or yeh three arrugments ko accept krta hai elements , index, array 

const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];

  const youngPerson = persons.filter( (persons) => persons.age < 18 )
  console.log(youngPerson);

//   reduce
// yeh pori value ko one value mei convert kr deta hai 

const number = [1, 2, 3, 4, 5]

const sun = number.reduce((accumulator, currentValue) => accumulator + currentValue, 100)
  console.log(sun)