import React from 'react';
import './Diagram.css';

function Diagram({ isActive }) {
  return (
    <div className={`diagram-container ${isActive ? 'active' : ''}`}>
      <h1 className="diagram-title">מבנה הרשות המקומית בשעת חירום</h1>
      <div className="frame">
        <p className="frame-text">ראש הרשות</p>
      </div>
      <div className="line"></div>
      <div className="black-frame">
        <p className="black-frame-text">מנכל הרשות\ ר"מט</p>
      </div>
      <div className="colored-box orange-box">
        <p className="colored-box-text">אגף חירום וביטחון </p>
      </div>
      <div className="colored-box blue-box">
        <p className="colored-box-text">יק"לר</p>
      </div>
      <div className="colored-box red-box">
        <p className="colored-box-text">כוחות ביטחון</p>
      </div>
      <div className="colored-box-sub">
        <p className="colored-box-text">מכלול אוכלוסייה</p>
      </div>
      <div className="colored-box-sub">
        <p className="colored-box-text">מכלול החינוך</p>
      </div>
      <div className="colored-box-sub">
        <p className="colored-box-text">מכלול הנדסה ותשתיות</p>
      </div>
      <div className="colored-box-sub">
        <p className="colored-box-text">מכלול לוגיסטיקה ותפעול</p>
      </div>
      <div className="colored-box-sub">
        <p className="colored-box-text"> מכלול משא"ן ומנהל כללי</p>
      </div>
      
    </div>
  );
}

export default Diagram;
