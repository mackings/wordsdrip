const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const usermodel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltrounds = 10;
const Author = require("../models/Author");
const { verifytoken } = require("../middlewares/jwt");






exports.Register = async (req,res)=>{



    try {

    const hashedpassword = await bcrypt.hash(req.body.password,saltrounds);
    const User = new usermodel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hashedpassword
    });

    const finduser =  await usermodel.findOne({email:req.body.email});
    if (finduser) {
        
        res.status(500).json({
            error:"User Already Existss ",
            user:User.email,
            id:finduser._id
        });
        
    } else {
        User.save();
        res.status(200).json({
            message:"User Registered Successfully ",
            data:User._id

        });
        
    }

        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error:"User Already Exist ",
        });
        
    }

    

}


exports.login =  async  (req,res,next)=>{


    try {
        const userlogin = new usermodel({
            email:req.body.email,
            password:req.body.password
        });
          
        const euser =  await usermodel.findOne({email:req.body.email });
        const author = await  Author.findOne({email:userlogin.email});
        const checkpass =  bcrypt.compareSync(req.body.password, euser.password);

        if (euser && checkpass) {
            const uemail = euser.email;
            console.log(uemail);
            const token = jwt.sign({uemail}, "jwt", {expiresIn:"1h"});
            res.status(200).json({
                message:"Sucessfully Logged in",
                id:euser._id,
                coins:euser.coins,
                authorid:author??"Not an Author",
                following:euser.following??"You are not following anyone",
                token:token,
                
            });
            console.log(token);
         
    
        } else if(euser){
            console.log("Account found but incorrect logins");
            res.status(500).json({
                message:"Incorret Login Details"
            });
        }else{
            console.log("Account not Found");
            res.status(404).json({
                message:"Account Not found"
            });

        }

        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:"User Was  Not found"
            
        });
        
    }



}

exports.followauthor =  async (req,res)=>{


    try {
        const userdata = new usermodel({

            authorId:req.body.authorid,
            user:req.body._id,
            
        });
        const author = await Author.findById(req.params.id);
        const reader = await usermodel.findById(req.body.user);
    
        if (!author) {
          return res.status(404).json({ error: 'Author not found' });
        }
    
    
        if (reader.following.includes(req.params.id)) {
          return res.status(400).json({ error: 'Already following the author' });
        }
    
        reader.following.push(author);
        author.followers.push(userdata);
    
        await reader.save();
        await author.save();
    
        res.json({ message: 'Successfully followed the author' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
      }
}





exports.unfollowauthor =  async (req,res)=>{


    try {
        const userdata = new usermodel({

            authorId:req.body.authorid,
            user:req.body._id,
            
        });
        const author = await Author.findById(req.params.id);
        const reader = await usermodel.findById(req.body.user);
    
        if (!author) {
          return res.status(404).json({ error: 'Author not found' });
        }
    
    
        if (reader.following.includes(req.params.id)) {
        reader.following.pop(author);
        author.followers.pop(userdata);
    
        await reader.save();
        await author.save();
          return res.status(400).json({ error: 'Successfully Unfollowed the author' });
        }
    
    
        res.json({ message: 'Successfully Unfollowed the author' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
      }
}


exports.getfollowers = async (req,res)=>{

    try {
        const myself =  await Author.findById(req.params.id).populate('followers');
        if (myself) {
            console.log(myself);
            res.status(200).json({
                Followers:myself
            });
            
        } else {
            res.status(400).json({
                Followers:"You have no followers"
            });
            
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            Followers:"You have no followers"
        });
        
    }

}


exports.getfollows = async (req,res)=>{

    try {
        const myself =  await usermodel.findById(req.params.id).populate('following');
        if (myself) {
            console.log(myself);
            res.status(200).json({
                Following:[myself]
            });
            
        } else {
            res.status(400).json({
                Followers:"You are not following anyone"
            });
            
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            Followers:"Error getting people you follow"
        });
        
    }

}





