import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import "../CSS/Logincss.css"
import logo from '../assets/img.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = async () => {
    const data = {
      "userName": username,
      "password": password
    };
    try {
      const response = await axios.post("http://localhost:5000/user/login", data);

    if (response.data.success) {
      // Login successful logic
      console.log('Login successful:', response.data.user);
      localStorage.setItem("user",response.data.user);
      Navigate('/home');
    } else {
      // Login failed logic
      console.log('Login failed:', response.data.message);
    }
  } catch (error) {
    // Handle error (display error message, etc.)
    console.error('Error logging in:', error);
  }
  };

  const handleLogout = () => {
    // Implement logout logic here
    setLoggedIn(false);
  };

  const handleRegister = () => {
    Navigate('/register');
  };

  return (
    <div className='login'>
      <div className='login-logo'>
        <img src={logo} />
      </div>
    <div className='login_container'>
        <form>
          <div>
            <div className=""></div>
            <input
              className='input'
              type="text"
              id="username"
              value={username}
              placeholder='UserName'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className='input'
              type="password"
              id="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className='login-button' onClick={handleLogin}>
            Login
          </button>
          <div className='signup-text'><p>Doesn't have an Account? <button onClick={handleRegister}>Register</button></p></div>
        </form>
      
    </div>
    </div>
  );
};

export default Login;
