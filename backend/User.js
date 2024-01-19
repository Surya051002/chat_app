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

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: 'smtp.forwardemail.net',
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'suryaprakashmbr@gmail.com', // sender address
      to: email, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });

    console.log('Message sent:', info.messageId);

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
