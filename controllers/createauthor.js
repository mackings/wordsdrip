const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const authors = require('../models/authors');
const Postmodel = require("../models/addpost");

router.post('/author', function(req,res){ 

   const author = new authors({
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


});


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


router.get('/allauthors', function(req,res){

    try {
        const Getauthors =  authors.find().toArray
       
        res.send(Getauthors)
        console.log(Getauthors);
    } catch (error) {
        console.log(error);
        
    }



});



module.exports = router;







