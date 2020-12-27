const express = require("express");
const router = express.Router();

const Contact =require('../models/contacts');

//retrieving data
router.get('/contact',(req,res)=>{
   // res.send("retrieving to contact list")
   Contact.find(function(err,contacts){
       res.json(contacts);
   })
});

//add contact
router.post('/contact',(req,res)=>{
    //logic for adding contact
    var newContact = new Contact();
    
        newContact.first_name=req.body.first_name;
        newContact.last_name=req.body.last_name;
        newContact.phone=req.body.phone;
    
    newContact.save((err,Contact)=>{
        if(err){
            res.json({msg: "failed to add contact"}); 
        }
        else
        {
          //  res.json({msg:"contact added successfully"+Contact});
          res.json(Contact);
        }
    })
});

//delete contacts
router.delete('/contact/:id',(req,res)=>{
      //logic for deleting contact
      Contact.remove({_id:req.params.id},function(err,result)
      {
          if(err)
          {
              res.json(err);
          }
          else{
               res.json(result);
          }
    });
});

// update contact
router.put('/contact/:id',(req,res)=>{
   // var id = req.params.id;
    Contact.findOneAndUpdate({_id:req.params.id}, {first_name:req.body.first_name, pretty: true},function(err, result){
     if (err) {
         //res.status(500).json({error:err});
         res.json(err);
        }
    else{
        res.json(result);
        }
    });
});
module.exports=router;
