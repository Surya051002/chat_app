import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Register.css'; // Import your CSS file

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  
  const handleRegistration = async () => {
    try {
      // Check email validity before registration
    

      // Assuming your registration API endpoint is at http://localhost:5000/register
      const response = await axios.post('http://localhost:5000/user/register', {
        userName: username,
        password: password,
        email: email,
        fullName: fullName,
      });

      // Check the response from the server
     
    } catch (error) {
      console.error('Error during registration:', error);
      
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
      
    </div>
  );
};

export default Registration;
