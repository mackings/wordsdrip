const express = require ("express");
const router = express.Router();
const bookmodel = require("../models/bookmodel");


router.post("/Addbook", async function(req,res){
    const  Addbook = new bookmodel({
       title:req.body.title,
       main:req.body.main
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
});


router.get("/books", async function(req, res){

  const allbooks = await bookmodel.find({});
  if (allbooks) {
    res.status(200).json({
        books:allbooks
    })
    
  }else{
    res.status(400).json({
        message:"No Books yet"
    })
  }

});
router.get("/books/:id", async function(req, res){

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
  
  });

  router.get("/books/search/:name", async function(req, res){

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
  
  });

module.exports = router;