// src/FabButton.js
import React, { useState } from 'react';
const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fab-container">
      <button className="fab" onClick={toggleButtons}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && (
        <div className="fab-buttons">
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="fab fab-sub">
            W
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="fab fab-sub">
            X
          </a>
        </div>
      )}
    </div>
  );
};

export default FabButton;