import React from 'react';
import './Header.css';

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL + '/collegeLogoText.png'} className="App-logo" alt="logo" />
      <img src={process.env.PUBLIC_URL + '/navbar.png'} className="right-logo-link" alt="navbar" onClick={onMenuClick} />
    </header>
  );
}

export default Header;
