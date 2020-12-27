const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const ContactSchema = mongoose.Schema({
    first_name:{
        type : String,
        reuired : true
    },
    last_name:{
        type : String,
        reuired : true
    },
    phone:{
        type : String,
        reuired : true
    }

});
const Contact = module.exports= mongoose.model('Contact',ContactSchema);