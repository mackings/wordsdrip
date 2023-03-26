const express = require('express');
const app = express();
const router = express.Router();
const cluster = require('cluster');
const thecpu = require("os").cpus().length;


exports.home = (req,res)=>{
    
    res.status(200).json({
        message:"Powered by Mac kingsley",
        greetings:"On a Lowkey You",
        date:Date,
        user:"You"
    })
   

}

