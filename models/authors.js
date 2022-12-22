const mongoose = require('mongoose');

const Authorschema =  new mongoose.Schema({

    name:{
        type: String,
       
    },

    email: {
        type: String,
        

    }
})

module.exports = mongoose.model('Authors',Authorschema);