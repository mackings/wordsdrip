const dotenv = require('dotenv').config();
const  express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mg = mongoose;
const home = require("./home");
const userRouter = require("./Routes/userroute");


app.use(express.json());
app.use("/api",userRouter);


mg.connect(process.env.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    console.log("Connected to DB")
    );




app.listen(process.env.PORT|| 5000 );