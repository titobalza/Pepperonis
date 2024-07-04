import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fab fab-sub">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      )}
      
    </div>
  );
};

export default FabButton;
