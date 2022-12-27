const express = require("express");
const mongoose = require("mongoose");


const Postschema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },

    
});


module.exports = mongoose.model('Addpostmodel',Postschema);