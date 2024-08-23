
// fetch method 

fetch("https://api.example.com/data")
.then(response => response.json())
.catch(error => console.error("Error fetching data:", error));

// Or using async/await
async function fetchData() {
try {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
} catch (error) {
  console.error("Error fetching data:", error);
}
}
