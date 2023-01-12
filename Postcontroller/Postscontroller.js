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

router.get('/getposts', verifytoken, function(req,res){



jwt.verify(req.token,"jwt",  (error,data)=>{
    if (error) {
        res.statusCode(403).json({
            message:"Forbidded your Pass",
            data:data
        });
    } else {
        const allposts =  Postmodel.find();
    console.log(allposts);

    res.status(200).json({
        message:allposts,
        data:data
});
        
    }
})
   

});

function verifytoken(req,res,next){

    const bheader = req.headers["Authorizaton"];
    if (typeof bheader !== "undefined") {
        const tokens = bheader.split("")[1];
        req.token = tokens;

        next();
       
    } else {
        res.status(403).json({
            message:"You are not Authorized"
        });
        console.log(bheader);
        
    }

}

module.exports = router;