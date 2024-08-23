// Closure

// ekk function ka andr lexical environement bind hu ka milta hhai usa hm closure kehty hain 


function scope() {
    let name = 'abdullah';
    function scopeTwo() {
        console.log(name);
    }
    return scopeTwo;
}

let result = scope();
result();


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


// function scope() {
//     let name = 'abdullah';
//     function scopeTwo() {
//         console.log(name);
//     }
//     scopeTwo();
// }
// scope();