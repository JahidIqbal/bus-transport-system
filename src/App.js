// src/App.js
import React, { useState } from 'react';
import LoginForm from './Login/Login';
import RegistrationForm from './Register/Register';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h1>Welcome, {loggedInUser.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
          <RegistrationForm onRegister={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
