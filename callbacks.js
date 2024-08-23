

// Callback

// yeh ekk aesa function huta hai jo kisi dosary function ko as a call back dia jta hai is ko mainly use asunc functions jisa ka data fetching or file reading ka liye use huta hai as a call back


function fetchData(callback) {
    // Assume this function fetches data from a server
    setTimeout(() => {
      const data = "Sample Data";
      callback(data); // Callback function is called with the data
    }, 1000);
  }
  
  function processData(data) {
    console.log("Processing data: " + data);
  }
  
  // Calling fetchData with processData as a callback function
  fetchData(processData);