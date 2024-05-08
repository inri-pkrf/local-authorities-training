// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'; // Import the Home component

function App() {
  return (
    <div className="App">
      <Header />
      <Home /> {/* Include the Home component */}
      {/* Main content of your app */}
    </div>
  );
}

export default App;