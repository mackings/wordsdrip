const express = require('express');
const app = express();
const router = express.Router();
const authormodel = require("../models/authors")

app.use("/",authormodel);



router.get('/allauthors', async function(req,res){

    try {
        const Getauthors = await authormodel.find().toArray()
        res.json({
            data:Getauthors.toArray
        });
        res.send(Getauthors.toArray)
    } catch (error) {
        console.log(error);
        
    }



});