var express = require('express'); 
var app = express(); 
 
app.get('/', function (req, res) { 
   res.send('Hello World'); 
}) 
 
var server = app.listen(8081,'localhost', function () { 
 
  var host = server.address().address 
  var port = server.address().port 
 
  console.log("Example app listening at https://%s::%s", host, port)
  
  
 
})