
// Classes
// classes ekk blue print ki tarah huty hain jin sa hm objects create krty hain 

// Objects 
// Classes ka insentance huty hain jin mei specific properties and method huty hain 

// Inheritance
// ekk class dosri class ki properties ko inherit krti hai 

class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`My name is : ${this.name}`);
    }
}

let myUser = new User('Abdullah');
myUser.hello();

class Admin extends User {
    hello(){
        console.log(`what is your name ? : ${this.name}`);
    }
}

let myAdmin = new Admin('Haseeb');
myAdmin.hello();