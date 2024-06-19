// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Diagram from './Diagram';
import Menu from './Menu';
import Gallery from './Gallery';
import Relations from './Relations'; // Ensure correct import path
import Ogen from './Ogen';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home');

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (component) => {
    setActiveComponent(component);
    setMenuOpen(false); // Close the menu after navigating
  };

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick} onNavigate={handleNavigate} />
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
