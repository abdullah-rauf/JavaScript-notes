
// javaScript mei objects data structures hain jo properties oor methods ko store krty hain.yeh preoperties key value pair ki form mei huti hai. jahan key string huti hai or value koi bi javascript type hu sqti hai 

// object creation  

let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'painting', 'gaming'],
    sayHello: function() {
        console.log('Hello, my name is'+ this.name);
    }
}

// accessing properties

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// accessing methods

person.sayHello(); // Output: Hello, my name is John Doe

// modifying properties

person.age = 31;
console.log(person.age); // Output: 31

// adding new properties

person.gender ='male';
console.log(person.gender); // Output: male


// delete the properties
delete person.age; 

