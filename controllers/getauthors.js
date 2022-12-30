const express = require('express');
const app = express();
const router = express.Router();
const authormodel = require("../models/authors")


router.get('/allauthors', function(req,res){

  const alldata =  authormodel.find((error)=>{
        if (error) {
            console.log(error);
        } else {
            res.status(200).json({
                message:alldata
            });
            console.log(alldata);
            
        }

    });



});

module.exports = router;