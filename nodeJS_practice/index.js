const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "example.txt"); // Ensure the file is in the same directory

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});
