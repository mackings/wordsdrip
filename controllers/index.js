const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();


router.get('/', function(req, res){
 	res.send('Hello Writers');
});






module.exports = router;