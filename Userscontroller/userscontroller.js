const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const user = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltrounds = 10;




router.post("/register", async function(req,res){

   const hashedpassword = await bcrypt.hash(req.body.password,saltrounds);
    const User = new user({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hashedpassword
    });


    User.save((error)=>{
        if (error) {
            res.status(500).json({
                error:"An error Occoured, Please Try Again"
            });
            console.log(error);
            
        } else {
            
            res.status(200).json({
                message:"User Successfully Registered"
            });
            console.log(User);
            
        }

    });
   
    
    
});


router.post("/login", async function(req,res){
    const userlogin = new user({
        email:req.body.email,
        password:req.body.password
    });
     
    const euser =  await user.findOne({email:req.body.email });
    if (euser) {
        console.log("User was found");
        console.log(euser.password);
        const token = jwt.sign( {user:euser.email,}, "mys",(error, token)=>{
          if (error) {
            console.log(error)
          } else {
            res.status(200).json({
                message:"User Was found",
                token:token
            });
          }
        

        });
     

    } else {
        console.log("User was not found");
        res.status(200).json({
            message:"User Was  Not found"
        });
    }
})

module.exports = router;