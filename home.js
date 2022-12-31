const express = require('express');
const app = express();
const router = express.Router();

router.get('/',function(req,res){

    res.status(200).json({
        message:"Powered by WordsDrip",
        date:Date,
        developer:"Mac Kingsley"
    })
})

module.exports = router;
