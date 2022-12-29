const express = require('express');
const app = express();
const router = express.Router();
const authormodel = require("../models/authors")


router.get('/allauthors', function(req,res){

    try {
        const Getauthors =  authormodel.find();
        res.json({
            data:Getauthors.toArray
        });
        res.send(Getauthors.toArray)
        console.log(Getauthors);
    } catch (error) {
        console.log(error);
        
    }



});

module.exports = router;