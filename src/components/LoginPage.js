// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Register = ({ handleToggleForm }) => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordValid = () => {
    const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return regex.test(registerData.password);
  };

  const getPasswordStrength = () => {
    const requirements = [
      { label: 'At least 8 characters', fulfilled: registerData.password.length >= 8 },
      { label: 'At least one lowercase letter', fulfilled: /[a-z]/.test(registerData.password) },
      { label: 'At least one uppercase letter', fulfilled: /[A-Z]/.test(registerData.password) },
      { label: 'At least one number', fulfilled: /\d/.test(registerData.password) },
      { label: 'At least one special character', fulfilled: /[@$!%*?&]/.test(registerData.password) },
    ];

    return requirements.map((requirement, index) => (
      <div key={index} className={`password-requirement ${requirement.fulfilled ? 'fulfilled' : ''}`}>
        {requirement.fulfilled ? '✔' : '✘'} {requirement.label}
      </div>
    ));
  };

  const handleRegister = async () => {
    if (registerData.email !== registerData.confirmEmail) {
      alert("Emails do not match");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post('/api/register', registerData);
      alert("Registration successful");
      handleToggleForm(); // Switch to login form after successful registration
      setRegisterData({ // Clear the form data
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <div className="input-group">
        <input
          type="text"
          value={registerData.firstNameName}
          onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
          placeholder="First Name"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          value={registerData.lastName}
          onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
          placeholder="Last Name"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          value={registerData.username}
          onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
          placeholder="Username"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          value={registerData.email}
          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
          placeholder="Email"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          value={registerData.confirmEmail}
          onChange={(e) => setRegisterData({ ...registerData, confirmEmail: e.target.value })}
          placeholder="Confirm Email"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          value={registerData.password}
          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
          placeholder="Password"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="password-strength">
        {getPasswordStrength()}
      </div>
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          value={registerData.confirmPassword}
          onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
          placeholder="Confirm Password"
          style={{ width: '300px' }}  // Adjust the width as needed
        />
      </div>
      <div className="input-group">
        <label className="show-password-checkbox">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
      </div>
      <button onClick={handleRegister} className="action-button register-button" disabled={!isPasswordValid()}>
        Register
      </button>
      <p>
        Already have an account? <button onClick={handleToggleForm} className="toggle-button">Login</button>
      </p>
    </div>
  );
};

const Login = ({ setAuth, handleToggleForm }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', loginData);
      setAuth(true);
      // Consider storing the received token
      // localStorage.setItem('token', response.data.token);
      alert("Login successful");
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {/* Login Form */}
      <div className="input-group">
        <input
          type="text"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          placeholder="Username"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          placeholder="Password"
        />
      </div>
      <div className="input-group">
        <label className="show-password-checkbox">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
      </div>
      <button onClick={handleLogin} className="action-button login-button">
        Login
      </button>
      <p>
        Don't have an account? <button onClick={handleToggleForm} className="toggle-button">Register</button>
      </p>
    </div>
  );
};

const AuthPage = () => {
  const [auth, setAuth] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="auth-page">
      {showRegister ? (
        <Register handleToggleForm={toggleForm} />
      ) : (
        <Login setAuth={setAuth} handleToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;