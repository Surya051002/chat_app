import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Register.css'; // Import your CSS file

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const verifyEmail = async (email) => {
    try {
      const response = await axios.post('https://api.zerobounce.net/v2/validate', {
        email,
        api_key: 'YOUR_ZEROBOUNCE_API_KEY',
      });

      const { status, sub_status } = response.data;

      if (status === 'Valid') {
        return true; // Email is valid
      } else {
        console.log(`Email verification failed. Status: ${status}, Sub-status: ${sub_status}`);
        return false; // Email is invalid
      }
    } catch (error) {
      console.error('Error during email verification:', error.message);
      return false; // Email verification failed due to an error
    }
  };

  const handleRegistration = async () => {
    try {
      // Check email validity before registration
      const isEmailValid = await verifyEmail(email);

      if (!isEmailValid) {
        setRegistrationStatus('Email verification failed. Please provide a valid email address.');
        return;
      }

      // Assuming your registration API endpoint is at http://localhost:5000/register
      const response = await axios.post('http://localhost:5000/user/register', {
        userName: username,
        password: password,
        email: email,
        fullName: fullName,
      });

      // Check the response from the server
      if (response.data.success) {
        setRegistrationStatus('Registration successful!');
      } else {
        setRegistrationStatus('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationStatus('Error during registration. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="registration-input"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registration-input"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration-input"
        />
      </label>
      <br />
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="registration-input"
        />
      </label>
      <br />
      <button onClick={handleRegistration} className="registration-button">
        Register
      </button>
      <p className="registration-status">{registrationStatus}</p>
    </div>
  );
};

export default Registration;