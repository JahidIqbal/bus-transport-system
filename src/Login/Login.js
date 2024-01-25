// src/LoginForm.js
import React, { useState } from 'react';
import users from '../users';


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      onLogin(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
