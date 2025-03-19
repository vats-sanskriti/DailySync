// harry = {
//     name: "harry",
//     favnum:36,
//     developer:true

// }
// console.log(exports , require , module , __filename , __dirname)

// module.exports = harry;

const fs = require('fs');

fs.readFile('file.txt' , 'utf8' , (err ,data) => {
    console.log(err,data)
})

console.log("finished reading file ")
