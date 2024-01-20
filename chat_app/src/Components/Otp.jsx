import React, { useState } from 'react';
import '../CSS/Otp.css';
import { useLocation } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();

  const handleOtpChange = (e) => {
    const value = e.target.value;
    // Ensure the entered value is numeric
    if (/^[0-9]*$/.test(value)) {
      setOtp(value);
      setErrorMessage('');
    } else {
      setErrorMessage('OTP should contain only numbers');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the OTP is exactly 6 digits
    if (otp.length === 6) {
      // Handle OTP submission logic here
      console.log('OTP submitted:', otp);
    } else {
      setErrorMessage('OTP should be 6 digits');
    }
  };

  return (
    <div className='otp-whole-container'>
      <div className="otp-container">
        <h1>Enter OTP</h1>
        <p>OTP sent to <span className='mail'>{location.state?.email}</span></p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength="6"
          />
         <br />
          <button className="button" type="submit">Submit OTP</button>
          <br />
          <br />
          <span className="error-message">{errorMessage}</span>
        </form>
        <a href="">Resend OTP?</a>
      </div>
    </div>
  );
};

export default Otp;
