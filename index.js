const dotenv = require('dotenv').config();
const  express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mg = mongoose;
const home = require("./home");
const userRouter = require("./Routes/userroute");
const { verifytoken } = require('./middlewares/jwt');
const cluster = require('cluster');
const morgan = require("morgan");
const pro = require("os").cpus().length;


app.use(express.json());
app.use("/",userRouter);
app.use(morgan("dev"));



mg.connect(process.env.DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    console.log("Connected to DB")
    );


    if (cluster.isPrimary) {
        console.log("Cluster set");


        for(let i = 0;i<pro;i++){
            cluster.fork();
        }
    } else {
        app.listen(process.env.PORT|| 5000 ); 
        console.log(pro);
        
    }



//app.listen(process.env.PORT|| 5000 ); 
//"start": "nodemon index js"#
//composite