const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Postmodel = require("../models/addpost");


router.post('/addpost',function(req,res){
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

module.exports = router;