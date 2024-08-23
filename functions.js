

// functions ekk block of code huta hai jo jis mei ekk specific task perform kr dia jta hai or yeh br br call or br br reuse hu sqta hai 
// Types
// named function
function sum(a, b) {
    return a + b;
}
console.log(sum(6, 4));

// arrow function
// yeh precise context provide krta hai and inline context or callbacks ka liye use huta hai

const add = (a, b) => a + b  

// anonymous function

const multiply = function(a, b) {
    return a * b
}

console.log(multiply(6, 4));

// function hoisting

console.log(hello()); // undefined

function hello() {
    return 'hello world';
}

// immidate invoked function expression

(function (){
    console.log('my name is abdullah');
    
})();

// Async function
// Ye functions asynchronous operations ko handle karne ke liye use kiye jate hain. Ye async keyword se define kiye jate hain aur await keyword ke sath asynchronous calls ko manage karte hain.

async function notDone() {
    let data = await fetch('url');
    return data;
}
