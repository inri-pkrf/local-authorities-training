import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Diagram from './Diagram';
import Menu from './Menu';
import Gallery from './Gallery';
import Relations from './Relations';
import Ogen from './Ogen';
import IntroComponent from './IntroComponent.js';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('intro'); // Default to 'intro' to show the intro component first

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (component) => {
    setActiveComponent(component);
    setMenuOpen(false); // Close the menu after navigating
  };

  const handleIntroEnd = () => {
    setActiveComponent('home'); // Set the active component to 'home' after the intro ends
  };

  return (
    <div className="App">
      {activeComponent === 'intro' ? (
        <IntroComponent onMoveNext={handleIntroEnd} />
      ) : (
        <>
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
        </>
       )} 
    </div>
  );
}
export default App;