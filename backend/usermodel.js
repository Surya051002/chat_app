const mongoose=require('mongoose');

const schema=mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports=mongoose.model("usermodel",schema);