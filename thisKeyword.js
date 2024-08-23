
//  this keyword hm reference deny ka liye use krty hain mtlb is cheez ka reference 


// function User(name, age) {
//     this.name = name; // 'this.name' user object ki 'name' property hai
//     this.age = age; // 'this.age' user object ki 'age' property hai
// }

class ClassName {
    constructor(parameter1, parameter2) {
        this.property1 = parameter1;
        this.property2 = parameter2;
    }
    display() {
        console.log(`class one name ${this.property1}, Classtwo name ${this.property2}`);
    }
}

const myUser = new ClassName("shaheen", 'iqbal');
myUser.display();

// JavaScript mein constructor ek special method hota hai jo class ke instances banane ke liye use kiya jata hai. Jab aap kisi class ka new instance create karte hain, to constructor method automatically call hota hai, aur ye method aapko class ke properties ko initial values assign karne ki sahulat deta hai

