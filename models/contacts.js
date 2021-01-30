const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const ContactSchema = mongoose.Schema({
    first_name:{
        type : String,
        maxlength:20,
        required : true
    },
    last_name:{
        type : String,
        maxlength:20,
        //required : true
    },
    phone:{
        type : Number,
        minlength:10,
        maxlength:10,
        required : true,
        unique : true
    }
    // first_name: String,
    // last_name:String,
    // phone:String

});
const Contact = module.exports= mongoose.model('Contact',ContactSchema);