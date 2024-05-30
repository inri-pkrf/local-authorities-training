import React from 'react';
import './Home.css';

function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="title">כלי עזר דיגיטלי</div>
      <div className="subtitle">This is the subtitle text that explains more about the digital tools. It provides additional context and information in a concise manner.</div>
      <div className="grey-box" onClick={() => onNavigate('diagram')}>הרשות בשע"ח</div>
      <div className="grey-box" onClick={() => onNavigate('gallery')}>הערכת מצב</div>
      <div className="grey-box" onClick={() => onNavigate('relations')}>ממשק עבודה בין מכלולים</div>
      <div className="grey-box b" onClick={() => onNavigate('ogen')}>עוגן איתן</div> {/* Add this line */}
      <div className="grey-box b">יעדים לאומיים</div>
    </div>
  );
}

export default Home;
