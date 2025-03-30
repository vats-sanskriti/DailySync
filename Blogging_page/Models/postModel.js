const mongoose=require("mongoose");

const postSchema = new mongoose.Schema({
    
    //post ka title hoga 
    title:{
        type:String,
        required:true,
    },

    //post ki body hogi 
    body:{
        type:String,
        required:true,
    },

    //post pr agr like hue to , usko type:id krengre jo likeContoller.js pr refernece krega 
    likes: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    },

    //same post pr agr comment hua to , uska type:id krke commentController.js pr erefernece kre denge 
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]

});

module.exports=mongoose.model("Post",postSchema); 