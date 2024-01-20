import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Register.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();

  function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(email);
  }

  const handleRegistration = async () => {

    const emailToValidate = email;
    if (!isValidEmail(emailToValidate)) {
      alert("please enter valid email address");
      return;
    } 

    if(isValidEmail(email) && username && password && fullName){
      navigate('/otp',{state:{email}});
    }

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
    <div className="reg-whole-container">
      <div className="registration-container">
      <h2 className='reg-h2'>Registration</h2>
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
    </div>
    
  );
};

export default Registration;
