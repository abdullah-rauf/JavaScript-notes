// Nullish coalescing operator, jo JavaScript programming language mein istemal hota hai, ek binary operator hai jo ?? ke symbol se represent hota hai. Is operator ka basic kaam yeh hai keh yeh do values ko check karta hai aur pehli "nullish" value ko ignore karke dosri value ko return karta hai. Yahan "nullish" se murad null ya undefined hoti ha

let a = null;
let b = "Hello World!";

let result = a ?? b;
console.log(result);  // "Hello World!"
