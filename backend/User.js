const express= require('express');
const route =express.Router();

route.post('/login',(req,res)=>{
  res.send("hello");
  console.log("hii");
})

module.exports =route;