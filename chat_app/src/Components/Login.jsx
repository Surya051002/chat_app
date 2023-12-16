import React, { useState } from 'react';
import "../CSS/Logincss.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const data={
      "email":username,
      "password":password
    }
    axios.post("http://localhost:4080/user/login",data).then((res)=>{
      if(res.statuscode==200){
        console.log("ok");
      }
      else{
        console.log("user not found");
      }
    }).catch((ers)=>{
      console.log(ers);
    })
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
