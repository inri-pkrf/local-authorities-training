import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Diagram from './Diagram';
import Menu from './Menu';
import Gallery from './Gallery';
import Relations from './Relations';
import Ogen from './Ogen';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home');

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleNavigate = (component) => {
    setActiveComponent(component);
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <div className="App">
      {!menuOpen && <Header onMenuClick={handleMenuClick} />}
      {menuOpen ? (
        <Menu onClose={() => setMenuOpen(false)} onNavigate={handleNavigate} />
      ) : (
        <div>
          {activeComponent === 'home' && <Home onNavigate={handleNavigate} />}
          {activeComponent === 'diagram' && <Diagram />}
          {activeComponent === 'gallery' && <Gallery />}
          {activeComponent === 'relations' && <Relations onNavigate={handleNavigate} />}
          {activeComponent === 'ogen' && <Ogen />}
        </div>
      )}
    </div>
  );
}

export default App;
