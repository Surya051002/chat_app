import React, { useState } from 'react';
import "../CSS/Logincss.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic.
    // For simplicity, this example just checks if both username and password are not empty.
    if (username !== '' && password !== '') {
      // Successful login
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      // Failed login
      setLoggedIn(false);
      alert('Please enter valid username and password');
    }
  };

  const handleLogout = () => {
    // Implement logout logic here if needed
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='login_container'>
      {!loggedIn ? (
        <form>
          <div>
            
            <div className=""></div>
            <input className='input'
              type="text"
              id="username"
              value={username} placeholder='UserName'
              onChange={(e) => setUsername(e.target.value)}
              />
              <hr/>
          
          </div>
          <div>
            
            <input className='input'
              type="password"
              id="password"
              value={password} placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr/>
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <div className='signup-text'><p>Doesn't have an Account? <a  href=''  className='register-text' onClick={console.log("clicked")}>Register</a></p></div>
        </form>
        
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
          
        </div>
        
      )}
    </div>
  );
};

export default Login;
