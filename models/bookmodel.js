const mongoose = require("mongoose");

const Bookschema = mongoose.Schema({
      title:{
        type:String
      },

      synopsis:{
        type:String
      },

      content:{
        type:String
      },

    

      
});

module.exports = mongoose.model("Books", Bookschema);