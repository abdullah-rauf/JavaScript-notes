

// async/await JavaScript mein promises ko handle karne ka asan tareeqa hai. Yeh code ko synchronous (line by line) tarah se likhne ki sahulat deta hai, lekin async operations ko bhi support karta hai.

async function fetchData() {
    try {
      let data = await fetch('https://api.example.com/data'); // wait karo is operation ke liye
      let result = await data.json(); // wait karo JSON parse hone tak
      console.log(result);
    } catch (error) {
      console.log('Error:', error); // agar koi error ho
    }
  }
  
  fetchData();