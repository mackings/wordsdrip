const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const user = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltrounds = 10;




exports.Register = async (req,res)=>{

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

}


exports.login = async  (req,res)=>{
    const userlogin = new user({
        email:req.body.email,
        password:req.body.password
    });
      
    const euser =  await user.findOne({email:req.body.email });
    const checkpass = bcrypt.compare(euser.password,userlogin.password);
    console.log(userlogin.password);
    console.log(euser.password);
    if (euser && checkpass) {
        const umail = euser.email;
        console.log("User was found");      
        const token = jwt.sign({umail}, "jwt", {expiresIn:"1h"},(error, token)=>{
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


}


