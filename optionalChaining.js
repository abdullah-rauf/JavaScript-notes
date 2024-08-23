// Optional chaining ka symbol ?. hai. Yeh symbol aapko kisi bhi object ki property ko check karne deta hai ke woh exist karta hai ya nahi, aur agar nahi karta to yeh undefined return karta hai bina kisi error k

let user = {
    name: "Ali",
    address: {
      street: "123 Main St",
      city: "Karachi"
    }
  };

let city = user.address?.city;
let zipCode = user.address?.postal?.zipCode;

console.log(zipCode);
console.log(city);


