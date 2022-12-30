const express = require("express");
const mongoose = require("mongoose");


const Postschema = new mongoose.Schema({

    title:{
        type:String,
        
    },

    body:{
        type:String,
        
    },

    
});


module.exports = mongoose.model('Posts',Postschema);