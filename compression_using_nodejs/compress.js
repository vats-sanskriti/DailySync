const fs = require("fs");
const zlib = require("zlib");

// Input and Output file paths
const inputFile = "example.txt"; // Replace with your file
const outputFile = "example.txt.gz"; // Compressed file

// Get file size before compression
const beforeSize = fs.statSync(inputFile).size;
console.log(`Original File Size: ${beforeSize} bytes`);

// Create read and write streams
const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

// Create a gzip transform stream
const gzip = zlib.createGzip();

// Pipe the read stream into gzip and then to write stream
readStream.pipe(gzip).pipe(writeStream);

writeStream.on("finish", () => {
  // Get file size after compression
  const afterSize = fs.statSync(outputFile).size;
  console.log(`Compressed File Size: ${afterSize} bytes`);
  console.log(`Compression Ratio: ${(afterSize / beforeSize * 100).toFixed(2)}%`);
});
