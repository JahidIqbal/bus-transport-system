// RequisitionForm.js
import React, { useState } from 'react';

const RequisitionForm = ({ onSubmit }) => {
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    // Perform form submission logic
    onSubmit(details);
  };

  return (
    <div>
      <h2>Requisition Form</h2>
      <label>
        Details:
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RequisitionForm;
