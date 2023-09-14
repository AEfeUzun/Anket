import React from 'react';
import './CustomLabel.css'; 

function CustomLabel2() {
    
  return (
    <div className="custom-label">
      <label htmlFor="label" className="label-text">
        Şifre Doğrulama:
      </label>
      <div className="label-box">
        <input type="password" id="label" className="label-input" />
        <span className="label-underline"></span>
      </div>
      
    </div>
  );
}

export default CustomLabel2;
