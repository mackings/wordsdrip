const express = require ("express");
const { verifytoken } = require("../middlewares/jwt");
const router = express.Router();
const bookmodel = require("../models/bookmodel");




exports.Addbook =  async ( req,res)=>{
  const  Addbook = new bookmodel({
    title:req.body.title,
    synopsis:req.body.synopsis,
    content:req.body.content 
 });

const addbooks = await Addbook.save((error)=>{
 if (error) {
     res.status(500).json({
         message:"error Occoured"
     });
     console.log(error);
 } else {
     
     res.status(200).json({
         message:"Success",
         response:"Book Has been Added Successfully"

     });
     console.log(addbooks);
    
     
 }

});
}



exports.getBooks = verifytoken , async  (req,res ,next)=>{
  const allbooks = await bookmodel.find({});
  if (allbooks) {
    res.status(200).json({
        books:allbooks
    })
    
  }else if(allbooks == null){
    res.status(400).json({
        message:"No Books yet"
    })
  }else{
    res.status(400).json({
      message:"No Books were found"
  })
  }


}
exports.getBooksbyid = async (req,res)=>{
  
  const allbooks = await bookmodel.findOne({_id:req.params.id});
  if (allbooks) {
    res.status(200).json({
        books:allbooks
    })
    
  }else{
    res.status(400).json({
        message:"No Books  was found"
    })
  }

}

exports.Searchbooks =  async (req,res)=>{
    const allbooks = await bookmodel.find({title:req.params.name});
    if (allbooks) {
      res.status(200).json({
          books:allbooks
      })
      
    }else{
      res.status(400).json({
          message:"No Books  was found"
      })
    }


}


exports.preview =(req,res)=>{
  
const thebook = bookmodel({
  name:req.body.name,
  email:req.body.email
});
let dbooks = thebook.save((error)=>{
  if (error) {
    
  } else {
    
  }
})


}



