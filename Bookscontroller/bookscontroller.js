
const express = require ("express");
const { verifytoken } = require("../middlewares/jwt");
const Author = require("../models/Author");
const router = express.Router();
const bookmodel = require("../models/bookmodel");
const chapter = require("../models/chapter");
const chapee = require("../models/chapter");



exports.Searchtags =(req,res)=>{

    try {
        const search = req.params.id;
        bookmodel.find({tags:{$in:search}},(error,books)=>{
            if (error) {
                res.status(500).json({
                    message:"Tag could not be found"
                });
            }else{
                res.status(200).json({
                    message:books
                });
            }

        });
        
    } catch (error) {
        res.status(500).json({
            message:"Tag could not be found"
        });
        
    }
}

exports.Addbook =  async ( req,res)=>{



try {
    
  const  Addbook = new bookmodel({
    author:req.body._id,
    title:req.body.title,
    synopsis:req.body.synopsis,
    status:req.body.status,
    tags:req.body.tags
 });

 const findauthor =  await Author.findById(req.params.id);
 if (findauthor) {
    Addbook.save();
    console.log("Found Author");
    findauthor.books.push(Addbook);
    findauthor.save();

    res.status(200).json({
        status:"Success",
        data:"Book was Added Successfully"
    })
    
 } else {
    console.log("Author not found");
    res.status(500).json({
        status:"Falied",
        data:"Book was not Published",
        mesage:"Activate Author Mode"
    })


    
 }
    
} catch (error) {

    res.status(400).json({
        status:"Falied",
        data:"Book was not Published",
        message:" Writer? Please Activate Author Mode"

    })
    
}


}


exports.addchapter = async (req,res,next)=>{

    try {
        const chapters = new chapter({
            chaptertitle:req.body.title,
            content:req.body.content

        })

        const findbook = await bookmodel.findById(req.params.id);
        if (findbook) {
            console.log("Yo Book was found");
            findbook.chapters.push(chapters);
            await findbook.save();

            
          
            res.status(200).json({
                massage:"Book Updated",
                book:chapters
            })
            
        } else {
            console.log("Book was not  found");
            res.status(500).json({
                massage:"Book Not Found"
            })
            
        }


        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"Falied",
            data:error
        })
        
    }


}


exports.findmybooks = async(req,res)=>{
    const getmybooks = await Author.findById(req.params.id).populate("books");
    if (getmybooks) {

        res.status(200).json({
            books:getmybooks
        });
        
    } else {
        res.status(500).json({
            books:"Error getting books"
        });
        
        
    }

}


//Verify first
//verifytoken
exports.getBooks = async  (req,res ,next)=>{
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


