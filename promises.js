// Callback hell sa bachny ka liye hm promises ko use krty hain 



// Promises JavaScript mein asynchronous operations ko handle karne ka ek tareeqa hain. Yeh future mein kisi bhi kaam (success ya failure) ke complete hone ka wada karti hain.


let myPromise = new Promise((resolve, reject) => {
  let isSuccess = true; // yeh condition hai
  
  if (isSuccess) {
    resolve("Success!"); // jab kaam sahi ho jaye
  } else {
    reject("Failed!"); // jab kaam fail ho jaye
  }
});

// myPromise
//   .then(result => console.log(result)) // agar promise resolve ho
//   .catch(error => console.log(error)); // agar promise reject ho

// let myPromise = new Promise(function (resolve, reject){
//     const result = true;

//     if(result){
//         resolve('Everything went well')
//     } else {
//         reject('Everything is not well')
//     }
// })
// .then( (user)=> console.log(resolve))
// .catch( ()=> console.log('error'))
