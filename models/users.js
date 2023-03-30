const express = require("express");
const mongoose = require('mongoose'); 

const Userschema = new  mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },

    password:{
        type:String
    },

    following:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Authors' 
    }],


});

module.exports = mongoose.model("Users",Userschema);