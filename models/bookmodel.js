const mongoose = require("mongoose");


const chapterschema = new mongoose.Schema({


  chaptertitle:{
    type:String
  },

  content:{
    type:String
  },

});



const Bookschema = new mongoose.Schema({

      author:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Authors"
       },

       title:{
        type:String
      },

      status:{
        type:String
      },

      synopsis:{
        type:String
      },


       chapters:[chapterschema],
       
       tags:[String]
      
});

module.exports = mongoose.model("Books", Bookschema);
