const express= require('express');
const userSchema = require('./userSchema')
const route =express.Router();

route.post('/login', async (req,res)=>{
    try{
    const { userName, password } = req.body;

    // Assuming you have a User model from userSchema
    const user = await userSchema.findOne({ userName });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Password is valid, user is authenticated
    res.status(200).json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
      });

route.post('/register', async (req,res)=>{
  try {
    const { userName, password, email, fullName } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ userName }, { email }] });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }

    // Create a new user
    const newUser = new User({
      userName,
      password,
      email,
      fullName,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
})

module.exports =route;