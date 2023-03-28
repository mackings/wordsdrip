const mongoose = require("mongoose");


const chapterschema = new mongoose.Schema({


    chaptertitle:{
      type:String
    },

    content:{
      type:String
    },
    
    book:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Book"
    }
  
  
  });


  module.exports = mongoose.model("chapter",chapterschema);