const fs = require("fs");
const zlib = require("zlib");

const inputFile = "example.txt.gz";
const outputFile = "decompress_example.txt";

// Get file size before decompression
const beforeSize = fs.statSync(inputFile).size;
console.log(`Original File Size: ${beforeSize} bytes`);

const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);
const gunzip = zlib.createGunzip();

readStream.pipe(gunzip).pipe(writeStream);



writeStream.on("finish", () => {
  // Get file size after compression
  const afterSize = fs.statSync(outputFile).size;
  console.log("File successfully decompressed!");
  console.log(`decompressed File Size: ${afterSize} bytes`);
  console.log(`decompression Ratio: ${(beforeSize / afterSize * 100).toFixed(2)}%`);
});