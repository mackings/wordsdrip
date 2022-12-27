const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const authors = require('../models/authors');

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

router.get('/alpha',function(req,res){
    res.send('alpha');
});


module.exports = router;







