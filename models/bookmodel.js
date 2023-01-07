const mongoose = require("mongoose");

const Bookschema = mongoose.Schema({
      title:{
        type:String
      },

      main:{
        type:String
      },

      
});

module.exports = mongoose.model("Books", Bookschema);