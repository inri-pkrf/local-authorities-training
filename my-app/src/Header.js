import React from 'react';
import './Header.css';

function Header({ onMenuClick, onNavigate }) {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + '/collegeLogoText.png'}
        className="App-logo"
        alt="logo"
        onClick={() => onNavigate('home')} // Navigate to 'home' component
      />
      <img
        src={process.env.PUBLIC_URL + '/navbar.png'}
        className="right-logo-link"
        alt="navbar"
        onClick={onMenuClick}
      />
      <img
        src={process.env.PUBLIC_URL + '/orangeTriangle.png'}
        alt="Decorative"
        className="decorative-photo"
      />
      <img
        src={process.env.PUBLIC_URL + '/blueTriangle.png'}
        alt="Decorative"
        className="blue-t"
      />
    </header>
  );
}

export default Header;