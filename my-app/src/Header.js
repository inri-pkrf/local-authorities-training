// Header.js
import React from 'react';
import './Header.css';

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + '/collegeLogoText.png'}
        className="App-logo"
        alt="logo"
        onClick={() => window.location.reload()} // Redirects to home page
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
      {/* <img
        src={process.env.PUBLIC_URL + '/blueTriangle.png'}
        alt="Decorative"
        className="blue-t"
      /> */}
    </header>
  );
}

export default Header;
