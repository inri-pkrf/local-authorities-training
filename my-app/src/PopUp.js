// PopUp.js
import React from 'react';
import './PopUp.css';

const PopUp = ({ isVisible, onClose, title, content }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close-button" onClick={onClose}>X</button>
        <h2 className="popup-title">{title}</h2>
        <div className="popup-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
