import React from 'react';
import './CustomLabel.css'; 

function CustomLabel3() {
    
  return (
    <div className="custom-label">
      <label htmlFor="label" className="label-text">
        E-Posta:
      </label>
      <div className="label-box">
        <input type="text" id="label" className="label-input" />
        <span className="label-underline"></span>
      </div>
      
    </div>
  );
}

export default CustomLabel3;
