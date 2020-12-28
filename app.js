//importing modules
var express = require("express");
var cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();
const route =require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist',{ useNewUrlParser: true , useUnifiedTopology: true });

//on connection
mongoose.connection.on('connected',(err)=>{
if(err)
{
    console.log('error while connecting to database '+ error);
}
else{
    console.log('connected to database mongodb @ 27017');
}
})

//port binding
//const port = 3000;
const port = process.env.PORT || 3000;


//adding middleware
app.use(cors());

//add body parser
app.use(bodyparser.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/", route);

//testing server
app.get("/",(req,res)=>{
    res.send('foobar')
});

app.listen(port,()=>{
    console.log("server started at port "+port);
});



