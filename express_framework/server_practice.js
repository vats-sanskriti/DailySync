// var express = require('express'); 
// var app = express(); 
 
// app.get('/', function (req, res) { 
//    res.send('Hello World'); 
// }) 
 
// var server = app.listen(8081,'localhost', function () { 
 
//   var host = server.address().address 
//   var port = server.address().port 
 
//   console.log("Example app listening at https://%s::%s", host, port)
  
  
 
// })

const  http = require('http');

const dataControl=(req ,resp) =>
{
  resp.write("hellp this is sanskriti");
  resp.end();
  console.log("server is running");
}

http.createServer(dataControl).listen(3000);