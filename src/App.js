// App.js
import React, { useState } from 'react';
import AdminView from './AdminView';
import ProfilePage from './Profile';
import RequisitionForm from './RequisitionForm';
import LoginForm from './Login/Login';
import RegistrationForm from './Register/Register';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [requisitions, setRequisitions] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    if (user.role === 'admin') {
      setIsAdmin(true);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsAdmin(false);
  };

  const handleRequisitionSubmit = (details) => {
    setRequisitions([...requisitions, { details, status: 'pending' }]);
  };

  const handleApprove = (req) => {
    // Dummy logic: Update requisition status to 'approved'
    const updatedRequisitions = requisitions.map((item) =>
      item === req ? { ...item, status: 'approved' } : item
    );
    setRequisitions(updatedRequisitions);
  };

  const handleDeny = (req) => {
    // Dummy logic: Update requisition status to 'denied'
    const updatedRequisitions = requisitions.map((item) =>
      item === req ? { ...item, status: 'denied' } : item
    );
    setRequisitions(updatedRequisitions);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h1>Welcome, {loggedInUser.username}!</h1>
          {isAdmin ? (
            <AdminView
              requisitions={requisitions}
              onApprove={handleApprove}
              onDeny={handleDeny}
            />
          ) : (
            <div>
              <ProfilePage user={loggedInUser} />
              <RequisitionForm onSubmit={handleRequisitionSubmit} />
            </div>
          )}
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