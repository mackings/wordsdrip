const mongoose = require('mongoose');

const following = new mongoose.Schema({

    name:{
        type:String
    },
    id:{
        type:String
    }

});


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

    
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
})

module.exports = mongoose.model('Authors',Authorschema);