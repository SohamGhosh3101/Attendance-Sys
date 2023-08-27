// LandingPage.js

import React, { useState } from 'react';
import './LandingPage.css';
import studentImage from './student.jpg';

function LandingPage({ onLogin }) {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (loginId.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter valid credentials.');
    } else {
      // Perform login validation here
      onLogin(loginId);
    }
  };

  return (
    <div className="landing-page">
      <div className="image-container">
        <img
          className="image"
          src={studentImage}
          alt="Background"
        />
      </div>
      <div className="login-container">
        <h1 className="login-header">Attend+</h1>
        <span>A Campus Attendance System</span>
        <div className="login-form">
          <input
            className="login-input"
            type="text"
            placeholder="Login ID"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error-message">{errorMessage}</p>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
