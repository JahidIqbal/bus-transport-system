// src/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // In a real application, you would send the registration data to the server
    // and handle user creation there. For this example, we'll just alert the values.
    alert(`Registered: ${username} - ${password}`);
    onRegister();
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
