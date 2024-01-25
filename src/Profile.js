// ProfilePage.js
import React from 'react';

const ProfilePage = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      {/* Add more user details here */}
    </div>
  );
};

export default ProfilePage;
