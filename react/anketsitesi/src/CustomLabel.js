import React from 'react';
import './CustomLabel.css'; 

function CustomLabel() {
  return (
    <div className="custom-label">
      <label htmlFor="label" className="label-text">
        Kullanıcı Adı:
      </label>
      <div className="label-boxbgc">
        <input type="text" id="label" className="label-input" />
        <span className="label-underline"></span>
      </div>
      
    </div>
  );
}

export default CustomLabel;
