const  express = require('express'); 
const app = express();
const Myrouter = require('./controllers/index');
const Createauthor = require('./controllers/createauthor');
const database = require('./models/model');
const mongoose = require('mongoose');
const mg = mongoose;


app.use('/',Myrouter);
app.use('/',Createauthor);
mg.connect('mongodb+srv://mac:wordsdrip@cluster0.plkqgqu.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true},
    console.log(mg.connection)
    );
    

   



app.listen(process.env.PORT|| 8000 );