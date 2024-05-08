// Menu.js
import React from 'react';
import './Menu.css';


function Menu({ onClose }) {






  return (
    <div className="menu">
      <h1 className="menu-title">תפריט</h1> {/* Menu title in Hebrew */}
      <img src={process.env.PUBLIC_URL + '/closeBtn.png'} alt="Close" onClick={onClose} className='closeBtn'/>
      <ul className="menu-list">
        <li>אוגן איתן - תרחיש ייחוס משיקי</li>
        <li>אפשרות 2</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        <li>אפשרות 3</li>
        {/* Add more menu options as needed */}
      </ul>
    </div>
  );
}


export default Menu;


