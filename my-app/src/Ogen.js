import React, { useState, useEffect } from 'react';
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

  const handlePrintOgenClick = () => {
    window.open(`${process.env.PUBLIC_URL}/עזר עוגן איתן - מאפשרים.pdf`, '_blank');
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ogen-container">
      <img src={process.env.PUBLIC_URL + '/ogenIcon.png'} alt="ogenIcon" className="ogenIcon" />
      <h1 className="ogen-title1"> תרחיש ייחוס משקי </h1>
      <p className="ogen-subtitle1"> לפניך סרטון הסבר ופירוט תרחיש הייחוס לתוכנית 'עוגן איתן' וההשפעות הצפויות על המשק </p>

      <div className="video-container">
        <video controls className="ogen-video"  poster={process.env.PUBLIC_URL + '/poster.jpg'}>
          <source src={process.env.PUBLIC_URL + '/ogenVideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <img src={process.env.PUBLIC_URL + '/hpArrow.png'} className="hpArrow-Ogen" alt="Ogen"></img>

      {/* <h1 className="ogen-title2">עוגן איתן - תרחיש ייחוס משקי</h1>
      <p className="ogen-subtitle2">תרחיש שמדגים משהו לגבי פיקוד העורף</p> */}

      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={process.env.PUBLIC_URL + image.src} alt={`Image ${index + 1}`} className="ogen-image" />
            <h2 className="image-title">{image.title}</h2>
            <p id={`image-text-${index}`} className="image-text">{image.text}</p>
          </div>
        ))}
      </div>

      <div className='btn-print-ogen' onClick={handlePrintOgenClick}>
        <img src={process.env.PUBLIC_URL + '/print.png'} className="print-img-gallery" alt="print"></img>
        <p className='text-print'>הורדת גרסה להדפסה</p>
      </div>

    </div>
  );
}

export default Ogen;
