import React from 'react';
import './Ogen.css'; // Import Ogen component CSS

function Ogen() {
  const images = [
    { src: '/ogen1.png', title: 'מים', text: 'הפסקה בהספקת המים למשך מספר ימים ' },
    { src: '/ogen2.png', title: 'מערכת קשר', text: 'שיבושים מקומיים לפרקי זמן קצרים' },
    { src: '/ogen3.png', title: 'טלפון ', text: 'נתק של עד 8 שעות במערכות התקשורת הקווית' },
    { src: '/ogen4.png', title: 'סלולר ', text: 'נתק של 24 שעות בשירותי דיבור וגלישה' },
    { src: '/ogen5.png', title: 'אינטרנט ', text: 'הפסקת השירות  למשך יומיים' },
    { src: '/ogen6.png', title: 'חשמל ', text: ' 2-3 יממות רצופות של עלטה' },
    { src: '/ogen7.png', title: 'ספקים חיצוניים', text: 'יפעלו רק מפעלים חיוניים עם התייצבות חלקית של עובדים חיוניים' },
    { src: '/ogen8.png', title: 'עובדים זרים', text: '75%-90% מהעובדים יעזבו את עבודתם' },
    { src: '/ogen9.png', title: 'עובדים', text: 'ירידה של 40% בהגעת העובדים למקומות עבודה    ' },
    { src: '/ogen10.png', title: 'היסעים', text: 'ירידה של 30%-50% בזמינות שירותי התחבורה הציבורית' },
    { src: '/ogen11.png', title: '  דלק ', text: 'שיבושים קלים' },
    { src: '/ogen12.png', title: 'גפ"מ ', text: 'שיבושים במועדי ההספקה ' },
  ];

  return (
    <div className="ogen-container">
      
      <h1 className="ogen-title">עוגן איתן - תרחיש ייחוס משקי</h1>
      <p className="ogen-subtitle">תרחיש שמדגים משהו לגבי פיקוד העורף</p>
      <div className="video-container">
        <video controls className="ogen-video">
          <source src={process.env.PUBLIC_URL + '/ogenVideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={process.env.PUBLIC_URL + image.src} alt={`Image ${index + 1}`} className="ogen-image" />
            <h2 className="image-title">{image.title}</h2>
            <p className="image-text">{image.text}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Ogen;
