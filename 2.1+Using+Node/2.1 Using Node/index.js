const fs = require("fs");

// fs.writeFile("node_npm.txt" , "hello from NODEJs" , (err) => {
//     if (err) throw err;
//     console.log("the file has been saved ");
// });


fs.readFile("node_npm.txt" ,"utf-8", (err , data) =>{
    if(err) throw err ;
    console.log(data);
});