import React from 'react';
import './Menu.css';

function Menu({ onClose, onNavigate }) {
  const handleItemClick = (component) => {
    onNavigate(component);
    onClose(); // Close the menu after navigating
  };

  return (
    <div className="menu">

          <img src={process.env.PUBLIC_URL + '/whiteLogo.png'} alt="Decorative" className="whiteLogo" />
      <h1 className="menu-title">עזר לניהול מצבי חירום ברשות המקומית
      </h1>
      <img src={process.env.PUBLIC_URL + '/closeBtn.png'} alt="Close" onClick={onClose} className="closeBtn" />
      <ul className="menu-list">
        <li onClick={() => handleItemClick('home')}>עמוד הבית</li>
        <li onClick={() => handleItemClick('diagram')}>מבנה הרשות המקומית בחירום</li>
        <li onClick={() => handleItemClick('gallery')}>הערכת מצב ברשות המקומית</li>
        <li onClick={() => handleItemClick('relations')}>ממשק עבודה בין מכלולים</li>
        <li onClick={() => handleItemClick('ogen')}> עוגן איתן - תרחיש ייחוס משקי </li> {/* Add this line */}
      </ul>
    </div>
  );
}

export default Menu;
