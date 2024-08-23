// Hoisting

// Yeh javaScript ka default method hai jo variable and function declarations code block ka top level pr lift kr deta hai


console.log(person);

var person = 'abdullah'
dontKnow()
function dontKnow() {
    console.log('DontKnow');
    
}

// hoisting nhi krta hai jab hum let or const declare kare hai

let nam = 'haseeb'

