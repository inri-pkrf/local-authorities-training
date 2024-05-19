// Header.js
import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu'; // Import the Menu component

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL + '/collegeLogoText.png'} className="App-logo" alt="logo" />
      <img src={process.env.PUBLIC_URL + '/navbar.png'} className="right-logo-link" alt="navbar" onClick={handleMenuClick} />
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
export default Header;