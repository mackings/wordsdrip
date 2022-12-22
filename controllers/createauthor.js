const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const authors = require('../models/authors');


app.use(express.urlencoded({extended:false}));
app.use(express.json());



router.post('/createauthor', function(req,res){

   const myauthor= new authors({
    name:req.body,
    email:req.body

   });
   myauthor.save();
   res.send('Authors created')
   console.log(myauthor);


});
router.get('/alpha',function(req,res){
    res.send('alpha');
});


module.exports = router;







