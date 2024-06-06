import React, { useState } from 'react';
import PhotoList from './PhotoList';
import CardDetails from './CardDetails';
import './Gallery.css';

const cardData = [
  { photo: '/assesment1.png', title: 'ראש הראשות\ מנכ"ל (רמ"ט)', headline: '1. ראש הראשות\ מנכ"ל (רמ"ט)', text: 'מטרה ומיקוד הנושאים המרכזיים בהערכת מצב ', video: 'path/to/video1.mp4' },
  { photo: '/assesment2.png', title: 'מרכז שליטה ודיווח', headline: '2. מרכז שליטה ודיווח', text: '  אירועים מרכזיים ברשות סטטוס הטיפול בהם.  תמ"צ כוחות וצוותים בשטח.  סטאטוס מימוש החלטות ראש הרשות/ הרמ"ט.    '   , video: 'path/to/video2.mp4' },
  { photo: '/assesment3.png', title: 'יקל"ר', headline: '3. יקל"ר', text: 'Some text for card 3', video: 'path/to/video3.mp4' },
  { photo: '/assesment4.png', title: 'מכלול אוכלוסייה', headline: '4. מכלול אוכלוסייה', text: 'Some text for card 4', video: 'path/to/video4.mp4' },
  { photo: '/assesment5.png', title: 'מכלול חינוך', headline: '5. מכלול חינוך', text: 'Some text for card 5', video: 'path/to/video5.mp4' },
  { photo: '/assesment6.png', title: 'מכלול מידע לציבור', headline: '6. מכלול מידע לציבור', text: 'Some text for card 6', video: 'path/to/video6.mp4' },
  { photo: '/assesment7.png', title: 'מכלול הנדסה ותשתיות', headline: '7. מכלול הנדסה ותשתיות', text: 'Some text for card 7', video: 'path/to/video7.mp4' },
  { photo: '/assesment8.png', title: 'מכלול לוגיסטיקה ותפעול', headline: '8. מכלול לוגיסטיקה ותפעול', text: 'Some text for card 8', video: 'path/to/video8.mp4' },
  { photo: '/assesment9.png', title: 'מכלול משאבי אנוש ומנהל כללי', headline: '9. מכלול משאבי אנוש ומנהל כללי', text: 'Some text for card 9', video: 'path/to/video9.mp4' },
  { photo: '/assesment10.png', title: 'ארגוני חירום וגופי סיוע', headline: '10. ארגוני חירום וגופי סיוע', text: 'Some text for card 10', video: 'path/to/video10.mp4' },
  { photo: '/assesment11.png', title: 'מרכז שליטה ודיווח(מכלול מבצעים)', headline: '11. מרכז שליטה ודיווח(מכלול מבצעים)', text: 'Some text for card 11', video: 'path/to/video11.mp4' },
  { photo: '/assesment12.png', title: 'ראש הרשות', headline: '12. ראש הרשות', text: 'Some text for card 12', video: 'path/to/video12.mp4' }
];




const Gallery = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handlePhotoClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleNext = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevious = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="gallery">
      <h1 className="ogen-title">הערכת מצב ברשות המקומית</h1>
      <p className="ogen-subtitle">יש להקפיד על סדר הדוברים, מיקוד בהצפת הפערים והמלצות חיוניות לאפקטיביות הערכת מצב</p>
      {selectedCardIndex === null ? (
        <PhotoList data={cardData} onPhotoClick={handlePhotoClick} />
      ) : (
        <>
          <CardDetails card={cardData[selectedCardIndex]} />
          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={selectedCardIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={selectedCardIndex === cardData.length - 1}>
              Next
            </button>
          </div>
        </>
      )}
          <img src={process.env.PUBLIC_URL + '/orangeTriangle.png'} alt="Decorative" className="decorative-photo" />

    </div>
  );
};

export default Gallery;
