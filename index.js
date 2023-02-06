const dotenv = require('dotenv').config();
const  express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mg = mongoose;
const home = require("./home");
const userRouter = require("./Routes/userroute");
const { verifytoken } = require('./middlewares/jwt');


app.use(express.json());
app.use("/",userRouter);
//app.use("/",verifytoken);


mg.connect(process.env.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    console.log("Connected to DB")
    );




app.listen(process.env.PORT|| 5000 );
//"start": "nodemon index js"