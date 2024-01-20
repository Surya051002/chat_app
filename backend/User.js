const express = require('express');
const userSchema = require('./userSchema');
const route = express.Router();

route.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await userSchema.findOne({ userName });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.status(200).json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

route.post('/register', async (req, res) => {
  try {
    const { userName, password, email, fullName } = req.body;
    const existingUser = await userSchema.findOne({ $or: [{ userName }, { email }] });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }

    const newUser = new userSchema({
      userName,
      password,
      email,
      fullName,
      friends: [], // Assuming 'friends' is an array field in your user schema
    });

    await newUser.save();

    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

route.post('/friends', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const friendsList = user.friends;
    res.status(200).json({ success: true, friends: friendsList });
  } catch (error) {
    console.error('Error fetching friends:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = route;
