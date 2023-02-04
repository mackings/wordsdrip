const mongoose = require('mongoose');

const Authorschema =  new mongoose.Schema({

name:{
    type:String
},
    email: {
        type: String,

    },
    followers:{
        type:[String],
        default:0

    }
})

module.exports = mongoose.model('Authors',Authorschema);