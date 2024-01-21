

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  friends:{
    type: [{}]
  },
  verified:{
    type:Boolean,
    default:false,
  },
  friends:{
    type:[],
  },
  otp:{
    type:String
  }
});

const User = mongoose.model('userSchema', userSchema);

module.exports = User;
