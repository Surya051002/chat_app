const mongoose=require('mongoose');
const usermodel=require('./usermodel');
const express=require('express');
const router =express.Router();


router.post("login",(req,res)=>{
    const data=usermodel.findOne(req.body.email);
    if(data.password===rwq.body.password){
        res.send('200','OK');
    }
    else{
        res.send('400',"user not found");
    }
});

module.exports={router}