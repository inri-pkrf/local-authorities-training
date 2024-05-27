import React from 'react';
import './Menu.css';

function Menu({ onClose, onNavigate }) {
  const handleItemClick = (component) => {
    onNavigate(component);
    onClose(); // Close the menu after navigating
  };

  return (
    <div className="menu">
      <h1 className="menu-title">תפריט</h1>
      <img src={process.env.PUBLIC_URL + '/closeBtn.png'} alt="Close" onClick={onClose} className="closeBtn" />
      <ul className="menu-list">
        <li onClick={() => handleItemClick('home')}>עמוד הבית</li>
        <li onClick={() => handleItemClick('diagram')}>אוגן איתן - תרחיש ייחוס משיקי</li>
        <li onClick={() => handleItemClick('gallery')}>Option 3</li>
        {/* Add more menu options as needed */}
      </ul>
    </div>
  );
}

export default Menu;
