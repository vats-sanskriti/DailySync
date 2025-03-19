const fs = require('fs');

// 

// fs.writeFile("./message.txt" , "hello from index.js native modules" , ()=>{

//  console.log("sentence written into message.txt ! go and check it ");
// });



// fs.readFile(path, encoding, (err, data) => { ... });

fs.readFile("./message.txt",'utf8' ,(err,data)=>{

  if(err) throw err;
    console.log(data.toString());
    console.log("thats all written in it ");

});
