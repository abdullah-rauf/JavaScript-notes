// JavaScript mein event loop aik mechanism hai jo code ko execute karta hai. Yeh asynchronous operations (jaise setTimeout ya API calls) ko handle karta hai. Pehle synchronous code execute hota hai, phir event loop asynchronous tasks ko process karta hai jab wo ready hotay hain

console.log('Start');

setTimeout(() => {
  console.log('Asynchronous Task');
}, 2000);

console.log('End');


// Output

// Start
// End
// Asynchronous Task





