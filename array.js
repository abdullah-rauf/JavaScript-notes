

// javaScript mei arrays multiple values ko store krti hain single variable ka andr 
                    // array elements ko access krna hota hain index se bhi

let fruits = ['apple', 'banana', 'mango ']

// acessing array element 
console.log(fruits[0]); // Outputs: Apple
// adding element to array
console.log(fruits.push('cherry')); 
// at he begning using 
console.log(fruits.unshift('pineapple')); 
// remove the last element
console.log(fruits.pop()); 
// remove the first element 
console.log(fruits.shift()); 
// to the part of array without modifying it 
let citrus = fruits.slice(1, 3);
