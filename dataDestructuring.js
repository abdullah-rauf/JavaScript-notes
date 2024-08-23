// Data destructuring, jo JavaScript mein ek popular technique hai, aapko objects ya arrays se properties ya values ko asani se extract karne mei help deta hai. Is technique ka istemal karke, aap code ko zyada clean aur readable bana sakte hain. Yeh especially useful hai jab aapko multiple properties ya values ko ek hi object ya array se nikalna ho

const user = {
    name: "Ahmed",
    age: 30,
    email: "ahmed@example.com"
  };

// const name = user.name;
// const email = user.email;

// data dstructuring technique
const { name, email } = user;

// // Nested destructuring

// const userProfile = {
//     name: "Ali",
//     details: {
//       age: 22,
//       hobbies: ["Cricket", "Reading"]
//     }
//   };
  
//   const { details: { age, hobbies: [firstHobby] } } = userProfile;
  

// //   Arrays Destructuring

// const first = numbers[0];
// const second = numbers[1];
// // By destructuring method 

// const [first, second] = numbers;
