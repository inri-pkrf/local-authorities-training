import React from 'react';
import './PopUp.css';

const PopUp = ({ isVisible, onClose, title, content, color }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title" style={{ color }}>{title}</h2> {/* Set the color dynamically */}
        <div className="popup-body">{content}</div>
      </div>
    </div>
  );
};

export default PopUp;
