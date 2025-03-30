const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json()); //middleware

const blog = require("./routes/blog");
//mount
app.use("/api/v1" ,blog);

const connectwithDb = require("./config/database");
connectwithDb();

app.listen(8000, '0.0.0.0', () => { 
    console.log("Server is running on port 8000"); 
  });


app.get("/" , (req , res) => {
    res.send("this is a homepage baby");
})