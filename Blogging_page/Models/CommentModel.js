const mongoose = require("mongoose");


//route handler

const commentSchema =new mongoose.Schema({
    
    //comment kisi post pr hi hogi 
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to postController
    },

    //comment krna wala user hoga ,jiski id hogi naam hoga 
    user: {
        type:String,
        required:true,
    },

    //comment type string hogi 
    body: {
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Comment" , commentSchema);