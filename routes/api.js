const express = require('express');
const router = express.Router();
const SignUpUser = require('../models/signUp');

router.get('/signup',(req,res)=>{
    SignUpUser.find({})
    .then((data)=>{
        console.log('Data: ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('Error: ',error);
    });
    
});

router.post('/signup',(req,res)=>{
    const newSignUpUser = new SignUpUser({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Email:req.body.Email,
        Contact:req.body.Contact,
        Username:req.body.Username,
        Password:req.body.Password
    });
    newSignUpUser.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry,Internal server error.'});
            return;
        }
        return res.json({
            msg:'Your data has been saved'
        });
    });  
});


module.exports = router;