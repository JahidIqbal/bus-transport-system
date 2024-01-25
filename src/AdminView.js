// AdminView.js
import React from 'react';

const AdminView = ({ requisitions, onApprove, onDeny }) => {
  return (
    <div>
      <h2>Admin View</h2>
      {requisitions.map((req, index) => (
        <div key={index}>
          <p>Details: {req.details}</p>
          <p>Status: {req.status}</p>
          {req.status === 'pending' && (
            <div>
              <button onClick={() => onApprove(req)}>Approve</button>
              <button onClick={() => onDeny(req)}>Deny</button>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AdminView;
