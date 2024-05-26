import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Diagram from './Diagram';
import Menu from './Menu';

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
      <Header onMenuClick={handleMenuClick} />
      {menuOpen ? (
        <Menu onClose={() => setMenuOpen(false)} onNavigate={handleNavigate} />
      ) : (
        <div>
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'diagram' && <Diagram />}
        </div>
      )}
    </div>
  );
}

export default App;
