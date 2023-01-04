const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const authormodel = require('../models/Author');
const jwt = require('jsonwebtoken');


router.post('/createauthor', function(req,res){ 

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


});


//GET AUTHORS

router.get('/getauthors', async function(req,res){

    const allauthors = await  authormodel.find();
    console.log(allauthors);

    res.status(200).json({
        message:allauthors
});
   

});


module.exports = router;







