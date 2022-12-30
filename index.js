const  express = require('express'); 
const app = express();
const Createauthor = require('./controllers/createauthor');
const Getauthors = require("./controllers/getauthors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mg = mongoose;
const authormodel = require("./models/authors");
const newpost = require("./controllers/createpost");
const home = require("./controllers/home");


mg.connect(process.env.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    console.log("Connected to DB")
    );

    
app.use(express.json());
app.use('/',home);
app.use('/',Createauthor);
app.use("/",authormodel);
app.use("/",Getauthors);
app.use('/',newpost);
app.use('/',home);

    

   



app.listen(process.env.PORT|| 5000 );