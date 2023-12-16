const express=require('express');
const cors=require('cors');
const db=require('./db');
const user=require('./user.js')
const app=express();

express.Router("user",user);
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    console.log("execute");
    res.send("hello");

})
app.listen(4080);