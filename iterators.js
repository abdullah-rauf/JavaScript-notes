// Iterators aik aisa tool hain jo programming languages, jaise ke JavaScript mein, collections (jaise arrays ya objects) ke elements ko ek ek karke access karne ke liye istemal hota hai. Yeh aik simple way provide karta hai jis se aap collection ke har element ko loop kar sakte hain

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let itherator = number[Symbol.iterator]();

// console.log(iterator.next().value);


// let numbers = [1, 2, 3, 4];
// let iterator = numbers[Symbol.iterator]();

// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // 4


// function* generateSequence(){
//     yield 1;
//     yield 2;
// }

// let generator = generateSequence();
// console.log(generator.next().value);


// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
  
//   let generator = generateSequence();
  
//   console.log(generator.next().value); // 1
//   console.log(generator.next().value); // 2
//   console.log(generator.next().value); // 3