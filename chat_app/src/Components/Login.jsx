import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import "../CSS/Logincss.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = async () => {
    const data = {
      "username": username,
      "password": password
    };
    console.log("hii")
    try {
      const response = await axios.post("http://localhost:5000/user/login", data);
      // Handle the response from the server, update the loggedIn state, etc.
      setLoggedIn(true);
    } catch (error) {
      // Handle error (display error message, etc.)
      console.error('Error logging in:', error);
    }
    if(loggedIn){
      Navigate('/home')
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
            <hr />
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
            <hr />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <div className='signup-text'><p>Doesn't have an Account? <button onClick={handleRegister}>Register</button></p></div>
        </form>
      
    </div>
  );
};

export default Login;
