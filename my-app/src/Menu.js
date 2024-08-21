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
        <div className='lineMenu'></div>
        <li onClick={() => handleItemClick('diagram')}>מבנה הרשות המקומית בחירום</li>
        <div className='lineMenu'></div>
        <li onClick={() => handleItemClick('gallery')}> הערכת מצב ברשות המקומית בחירום</li>
        <div className='lineMenu'></div>
        <li onClick={() => handleItemClick('relations')}>ממשקי עבודה בין מכלולים</li>
        <div className='lineMenu'></div>
        <li onClick={() => handleItemClick('target')}> יעדים לאומיים </li>
        <div className='lineMenu'></div>
        <li id='last-item-m' onClick={() => handleItemClick('ogen')}> תרחיש ייחוס מישקי</li>
        <div className='lineMenu' id='lineMenuLast'></div>
      </ul>

      <div className='mashov-menu'>
        <div className='mashovTextMenu'>
          <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
          <br /> <a id='linkMenu' href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            בקישור הבא
          </a>
        </div>
      </div>

    </div>
  );
}

export default Menu;
