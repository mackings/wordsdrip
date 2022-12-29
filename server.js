const  express = require('express'); 
const app = express();
const Myrouter = require('./controllers/index');
const Createauthor = require('./controllers/createauthor');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mg = mongoose;
const authormodel = require("./models/authors");
const Getauthors = require("./controllers/getauthors");
const Postrouter = require("./controllers/createpost");

app.use(express.json());
app.use('/',Myrouter);
app.use('/',Createauthor);
app.use("/",authormodel);
app.use("/",Getauthors);
app.use("/",Postrouter);




mg.connect('mongodb+srv://mac:wordsdrip@cluster0.plkqgqu.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
    console.log(mg.connection)
    );
    

   



app.listen(process.env.PORT|| 1000 );