const fs = require("fs");
const path = require("path");

function displayFileContent() {
  // path.join helps prevent path errors regardless of where you run the code
  const filePath = path.join(__dirname, "files", "file-data.txt");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err.message);
      return;
    }
    console.log("--- File Content Received ---");
    console.log(data);
  });
}

// Export the function so app.js can use it
module.exports = { displayFileContent };