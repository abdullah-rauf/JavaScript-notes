// Immediately invoked function expression (IIFE) 

// Jo function immediately execute hu gye 
// Global scope ka pollution sa bachna ka lia IIFE bi use krty hain global scope ka pollution sa bachny ka lia like jo bi variables declare kia hun IIFE un sa bi pehly immediately execute hu gye ga 
// semi column end mei lazmi lgna huta hai ni tu IIFE ko nhi pta huta rukna khn hai  

(function nameCall() {
    console.log('Database Connected');
})();
// Arrow function IIFE
( (name) => {
    console.log(`Database Two Connected my name is ${name}`)
})('Abdullah');