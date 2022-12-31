const  express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mg = mongoose;
const home = require("./home");
const Postcontroller = require("./Postcontroller/Postscontroller");
const Authorcontroller = require("./Authorscontroller/Authorscontroller");

app.use(express.json());
app.use('/',home);
app.use('/', Postcontroller);
app.use('/', Authorcontroller);



mg.connect(process.env.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    console.log("Connected to DB")
    );




app.listen(process.env.PORT|| 5000 );