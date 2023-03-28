const mongoose = require('mongoose');

const Authorschema =  new mongoose.Schema({

name:{
    type:String
    },
    
    email: {
        type: String,

    },
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Books"
    }],

    
    followers:{
        type:[String],
        default:0

    }
})

module.exports = mongoose.model('Authors',Authorschema);