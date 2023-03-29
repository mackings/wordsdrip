const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const usermodel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltrounds = 10;
const Author = require("../models/Author");




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


    try {
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

        
    } catch (error) {
        res.status(404).json({
            message:"User Was  Not found"
        });
        
    }



}

exports.followauthor =  async (req,res)=>{


    try {
        const userdata = new usermodel({

            authorId:req.body.authorid,
            userId:req.body._id,
            
        });
        const author = await Author.findById(req.params.id);
    
        if (!author) {
          return res.status(404).json({ error: 'Author not found' });
        }
    
        const user = await usermodel.findById(userdata.userId);
        console.log(user.following);
        //const ifollow = user.f
    
        if (user.following.includes(author)) {
          return res.status(400).json({ error: 'Already following the author' });
        }
    
        user.following.push(author);
        author.followers.push(userdata);
    
        await user.save();
        await author.save();
    
        res.json({ message: 'Successfully followed the author' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
      }
}


