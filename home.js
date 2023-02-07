const express = require('express');
const app = express();
const router = express.Router();
const cluster = require('cluster');
const thecpu = require("os").cpus().length;


exports.home = (req,res)=>{
    
    res.status(200).json({
        message:"Powered by WordsDrip",
        greetings:"May the  New Year Favour you",
        date:Date,
        user:"Mac Kingsley"
    })
   

}

