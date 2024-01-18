const mongoose = require('mongoose');
const userSchema =mongoose.Schema({
    userName:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model("userSchema",userSchema);