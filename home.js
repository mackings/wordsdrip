const express = require('express');
const app = express();
const router = express.Router();

router.get('/',function(req,res){

    res.status(200).json({
        message:"Powered by WordsDrip",
        greetings:"May the  New Year Favour you",
        date:Date,
        user:"Mac Kingsley"
    })
})

module.exports = router;
