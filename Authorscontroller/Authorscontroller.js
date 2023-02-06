const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const authormodel = require('../models/Author');
const jwt = require('jsonwebtoken');


exports.Createauthor = (req,res)=>{
    const author = new authormodel({
        name:req.body.name,
        email:req.body.email
       });
       
    
       author.save((error)=>{
        if (error) {
            res.status;
            
        } else {
            console.log('Data saved')
    
            res.status(200);
            res.json({
                message:"Successfully added Authors"
            })
            console.log(req.body);
            
        }
    
       });

}




//GET AUTHORS

exports.Getauthors = async (req,res)=>{
    
    const allauthors = await  authormodel.find();
    console.log(allauthors);

    res.status(200).json({
        message:allauthors
});
   

}


//follow author

exports.follow = async (req,res)=> {
    const reader = req.body.name
    const authors = req.body.user

    const find = authormodel.findOne({_id:authors});

    if (find) {
        const updates = await authormodel.findOneAndUpdate({_id:authors}, {$push:{followers:authors}},{new:true},(error)=>{
           // console.log(error);
            
        },res.status(200).json({
            message:"Succesfully followed User"
        }));
       
        
    
    } else {
        res.status(404).json({
            message:"Could not find Author"
        })
        
    }

    

}










