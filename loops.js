

// loops and iterations developers ka code ko repeatedly execute karne ki permission dete hai jb tk koi specific condition or un ka task meet nh kr jye 

// different types of loops huty hhain 
// for 
// for loops tab use huta hai jb hma pta hu hma code ko kitna br repeat krwna hai yeh specific number of time ka liye code execute krta hai 
for (let i = 0; i <=5; i++) {
    console.log(i);
}

// while
// yeh loop tb tk execute krta hai jb tk condition true rhy 
let a = 0;
while (a = 10) {
    console.log(a);
    a++; 
}

// do while
// yeh loop kam az kam ekk dfa code execute krta hai phir condition check krta hai agr condition true hai tu yeh agy continue krta hai 
let b = 0;
do {
    console.log(b);
    b++; 
} while (b <= 5);

// for...in
// yeh loop objects ki properties ka through iterate krta hai 
const person = {
    name : 'Abdullah',
    age : 21,
    city : 'Lahore'
}
for (const key in person) {
    let keys = (key, person[key]) 
    console.log(keys);
}

// for...of
// yeh loops objects like ( arrays, strings ) ka through iterate krta hai 
let arr = [1, 2, 3, 4, 5, 6, 7]
for (let num of arr) {

    console.log(num);
}