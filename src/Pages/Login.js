import React, { useState } from 'react';
import '../css/Login.css'



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (rePassword !== password) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    // Perform login logic here
  };

  return (
    <div className="app">
      <h1 className="title">Login</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Re-enter Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" onClick={handleLogin}>Login</button>
        <div className="options">
          <a href="#forgot">Forgot Password?</a>
          <span>|</span>
          <a href="#create">Create Account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
