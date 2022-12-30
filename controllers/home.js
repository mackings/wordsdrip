const express = require('express');
const router = express.Router();



router.get('/',function(req,res){

    res.send('Top Boy');
})

module.exports = router;