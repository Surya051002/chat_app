import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Register.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  
   
  

  const handleRegistration = async () => {

    const emailToValidate = email; 

 

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
      setOtp(response.data.message);
      console.log(response.data.message);
      
    } catch (error) {
      console.error('Error during registration:', error);
      
    }
  };

  useEffect(() => {
    if(username && password && fullName){
      navigate('/otp',{state:{email,otp}});
    }
  },[otp]);

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
  }

export default Registration;
