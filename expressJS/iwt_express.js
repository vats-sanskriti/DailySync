const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const port = 8000;
app.use(express.json());


const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });




// Get Request
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Post Request
app.post("/api", (req, res) => {
  console.log(req.body);
  res.json({ message: "Post Request!" });
});

// file upload using multer
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ message: "File Uploaded!", filename: req.file.originalname });
});

// Serve single Static File
app.get('/', function(req,res) {
  res.sendFile('index.html', { root: __dirname });
});

// Serve Static Files
app.use(express.static('public'));






app.get("/" , (req,res) =>{
     res.send("hello world");
});

app.get("/test" , (req,res) =>{
    res.send("<h1>hello world from node ->test</h1>");
});

app.get("/test/:name" , (req,res) =>{
    console.log(req.params.name); 
    res.send(`hello world from node ${req.params.name}`);
});

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
});


