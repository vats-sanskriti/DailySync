const mongoose= require("mongoose");
require("dotenv").config();

const connectwithDb= () =>{
    mongoose.connect(process.env.DATABASE_URL ,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    })

    .then(console.log("DB Connected Succesfully"))
    .catch( (error) =>{
        console.error(error);
        process.exit(1); //abnormal termination
    })
};

module.exports = connectwithDb;