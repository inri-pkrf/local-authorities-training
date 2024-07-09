import React, { useState } from 'react';
import './Diagram.css';
import PopUp from './PopUp';

const Diagram = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', content: '', color: '' });

  const handleBoxClick = (title, content, color) => {
    setPopupContent({ title, content, color });
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="diagram-container">
      <h1 className="diagram-title">מבנה הרשות המקומית בשעת חירום</h1>
      <div 
        className="frame" 
        onClick={() => handleBoxClick('ראש הרשות', 'Detailed information about ראש הרשות', '#555555')}
      >
        <p className="frame-text">ראש הרשות</p>
      </div>
      <div className="line"></div>
      <div 
        className="black-frame" 
        onClick={() => handleBoxClick('מנכל הרשות\ ר"מט', 'Detailed information about מנכל הרשות\ ר"מט', '#000000')}
      >
        <p className="black-frame-text">מנכל הרשות\ ר"מט</p>
      </div>
      <div className="colored-box blue-box" onClick={() => handleBoxClick('אגף חירום וביטחון', 'Detailed information about אגף חירום וביטחון', '#6daae2')}>
        <p className="colored-box-text">אגף חירום וביטחון </p>
      </div>
      <div className="colored-box orange-box" onClick={() => handleBoxClick('יק"לר', 'Detailed information about יק"לר', '#d87b3c')}>
        <p className="colored-box-text">יק"לר</p>
      </div>
      <div className="colored-box red-box" onClick={() => handleBoxClick('כוחות ביטחון', 'Detailed information about כוחות ביטחון', '#db3f3f')}>
        <p className="colored-box-text">כוחות ביטחון</p>
      </div>
      <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול אוכלוסייה', 'Detailed information about מכלול אוכלוסייה', '#044188')}>
        <p className="colored-box-text">מכלול אוכלוסייה</p>
      </div>
      <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול החינוך', 'Detailed information about מכלול החינוך', '#044188')}>
        <p className="colored-box-text">מכלול החינוך</p>
      </div>
      <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול הנדסה ותשתיות', 'Detailed information about מכלול הנדסה ותשתיות', '#044188')}>
        <p className="colored-box-text">מכלול הנדסה ותשתיות</p>
      </div>
      <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול לוגיסטיקה ותפעול', 'Detailed information about מכלול לוגיסטיקה ותפעול', '#044188')}>
        <p className="colored-box-text">מכלול לוגיסטיקה ותפעול</p>
      </div>
      <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול משא"ן ומנהל כללי', 'Detailed information about מכלול משא"ן ומנהל כללי', '#044188')}>
        <p className="colored-box-text"> מכלול משא"ן ומנהל כללי</p>
      </div>

      <PopUp 
        isVisible={isPopupVisible}
        onClose={closePopup}
        title={popupContent.title}
        content={popupContent.content}
        color={popupContent.color} // Pass color to the popup component
      />
    </div>
  );
};

export default Diagram;
