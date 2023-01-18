const express = require("express");
const app = express();
const router = express.Router();
const Postmodel = require("../models/addpost");
const jwt = require("jsonwebtoken");
const verifytoken = require("../middlewares/jwt");




exports.Addpost = (req,res)=>{
    const Savepost = new Postmodel({
        title:req.body.title,
        body:req.body.body

        
    });

    Savepost.save((error)=>{
        
        if (error) {
            console.log(error)
        } else {
            res.status(200).json({
                message:"Post added Successfully"
            });
            console.log(req.body);
            
            
        };
    });


};


//GET POSTS

exports.getposts = async (req,res)=>{
    try {
        const viewposts = await Postmodel.find({});
        res.status(200).json({ 
            message:"Successful",
            data:viewposts
        });
        
    } catch (error) {
       res.status(500) .json({
        message:"Server Error"
       })
    }
}

