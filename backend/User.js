const express = require('express');
const userSchema = require('./userSchema'); // Assuming userSchema is defined
const nodemailer = require('nodemailer');

const route = express.Router();

route.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Assuming you have a User model from userSchema
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

    // Check if the username or email already exists
    const existingUser = await userSchema.findOne({ $or: [{ userName }, { email }] });
    console.log(email)
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'suryaprakashmbr@gmail.com',
        pass: 'huni suee yxdg bmox'
      }
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const msg = {
      from: 'suryaprakashmbr@gmail.com', // sender address
      to: `${email}`, // list of receivers
      subject: "Verify", // Subject line
      text: "http://localhost:5000/verify"
    };
    try {
      const info = await transporter.sendMail(msg);
      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
      // Respond to the client with an error message
      return res.status(500).json({ success: false, message: 'Error sending verification email' });
    }
// Create a new user
const newUser = new userSchema({
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
});

module.exports = route;
