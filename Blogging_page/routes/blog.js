const express = require("express");
const router = express.Router();

// import controller
const {dummylink,likePost, unlikePost } =require("../controller/likeController");
const {createComment} = require("../controller/commentController");
const {createPost ,getAllPosts} =require("../controller/postContoller") ;

//mapping 

router.get("/dummyroute" ,dummylink);
router.post("/comments/create" , createComment);
router.post("/posts/create" , createPost);
router.get("/posts" ,getAllPosts);
router.post("/likes/like" ,likePost);
router.post("/likes/unlike" ,unlikePost);

//export  
module.exports= router; 