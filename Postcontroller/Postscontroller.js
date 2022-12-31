const express = require("express");
const app = express();
const router = express.Router();
const Postmodel = require("../models/addpost");




router.post('/Addpost',function(req,res){
    const Addpost = new Postmodel({
        title:req.body.title,
        body:req.body.body

        
    });

    Addpost.save((error)=>{
        
        if (error) {
            console.log(error)
        } else {
            res.status(200).json({
                message:"Post added Successfully"
            });
            console.log(req.body);
            
            
        };
    });


});


//GET POSTS

router.get('/getposts', async function(req,res){

    const allposts = await  Postmodel.find();
    console.log(allposts);

    res.status(200).json({
        message:allposts
});
   

});

module.exports = router;