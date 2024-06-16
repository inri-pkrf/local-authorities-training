import React, { useState } from 'react';
import PhotoList from './PhotoList';
import CardDetails from './CardDetails';
import './Gallery.css';

const cardData = [
  { photo: '/assesment1.png', title: 'ראש הראשות\ מנכ"ל (רמ"ט)', headline: '1. ראש הראשות\ מנכ"ל (רמ"ט)', text: 'מטרה ומיקוד הנושאים המרכזיים בהערכת מצב ', video: 'path/to/video1.mp4' },
  { photo: '/assesment2.png', title: 'מרכז שליטה ודיווח', headline: '2. מרכז שליטה ודיווח', text: '  אירועים מרכזיים ברשות סטטוס הטיפול בהם.  תמ"צ כוחות וצוותים בשטח.  סטאטוס מימוש החלטות ראש הרשות/ הרמ"ט.    '   , video: 'path/to/video2.mp4' },
  { photo: '/assesment3.png', title: 'יקל"ר', headline: '3. יקל"ר', text: 'תמ"צ צבאית - הערכת האיום, מצב משפטי, תמ"צ כוחות ומאמצים עיקריים בפקע"ר.  מדיניות התגוננות – מדיניות נוכחית ותמונת מצב מימוש המדיניות ופערים (פיקוח ואכיפה, פגיעה בשירותים חיוניים) + ריכוז החרגות הרשות.  תמ"צ אוכלוסייה - מגמות אוכלוסייה, צרכים והנחיות פיקוד העורף.  סטאטוס בקשות הסיוע של הרשות מפקע"ר ודרישות סיוע של פקע"ר מהרשות.', video: 'path/to/video3.mp4' },
  { 
    photo: '/assesment4.png', 
    title: 'מכלול אוכלוסייה', 
    headline: '4. מכלול אוכלוסייה', 
    text: `
      כשירות המכלול לביצוע משימותיו מגמות התנהגות אוכלוסייה במרחב הרשות וצרכי האוכלוסייה.
      תמ"צ משאבי קהילה והתנדבות - משימות למול משאבים ופערים.
      תמ"צ רווחה – סטטוס שירותי רווחה ומסגרות למול מדיניות התגוננות.
      תמ"צ מתקני קליטה (במידה והופעל) – אוכ' ללא קורת גג, סטטוס נקלטים, סטטוס מתקנים ופערים.
      תמ"צ בריאות – סטטוס מתן שירותי רפואה למול מדיניות התגוננות.
      תמ"צ דת – סטטוס שירותי דת למול מדיניות התגוננות והיערכות ללוויות.
      תמ"צ עלייה וקליטה (במידה וקיים) – עולים במרכזי הקליטה ובקהילה: סטאטוס שירותים, צרכים ופערים.
      פערים והמלצות לטיפול, סיוע ותמיכה בתושבי הרשות.
    `,
    video: 'path/to/video4.mp4' 
  },
  { 
    photo: '/assesment5.png', 
    title: 'מכלול חינוך', 
    headline: '5. מכלול חינוך', 
    text: `
      כשירות המכלול לביצוע משימותיו.
      תמ"צ לימודים פדגוגי – אופן ביצוע לימודים למול מדיניות התגוננות, מוכנות מוסדות החינוך ופערים.
      תמ"צ חינוך מיוחד – משמעויות ממדיניות ההתגוננות ואופן התמיכה בילדים.
      תמ"צ חינוך בלתי פורמלי – סטטוס פעילויות חינוכיות למול מדיניות התגוננות.
      תמ"צ מסגרות לילדי עובדים – סטטוס הפעלה ופערים.
      פערים והמלצות לפעילויות הפגה ופעילויות להספקת שירותי חינוך ותמיכה בילדים.
    `,
    video: 'path/to/video5.mp4' 
  },
  { 
    photo: '/assesment6.png', 
    title: 'מכלול מידע לציבור', 
    headline: '6. מכלול מידע לציבור', 
    text: `
      כשירות המכלול לביצוע משימותיו.
      מדד תודעת שירות לתושב – סטטוס המענה לפניות התושבים.
      תמ"צ צרכי התושבים – מפלטפורמות הרשות: פילוח פניות ע"פ נושאים וקהלי יעד.
      תמ"צ מימוש תוכנית ההסברה היומית שסוכמה.
      המסרים העיקריים לתוכנית הסברה ליממה הקרובה.
      פערים והמלצות לפעילות הסברה ולפעולות מענה לצרכי התושבים.
    `,
    video: 'path/to/video6.mp4' 
  },

  { 
    photo: '/assesment7.png', 
    title: 'מכלול הנדסה ותשתיות', 
    headline: '7. מכלול הנדסה ותשתיות', 
    text: `
      כשירות המכלול לביצוע משימותיו.
      כ"א, קבלנים, חומרים, ציוד הנדסי.
      תמ"צ תשתיות ומבנים – רמת הפגיעה במבנים ורמת הנזק בתשתיות.
      פעילות לצמצום הסכנות מחומ"ס ומפגעי סביבה.
      פערים והמלצות לתעדוף לטיפול במבנים ובתשתיות.
    `,
    video: 'path/to/video7.mp4' 
  },

  { 
    photo: '/assesment8.png', 
    title: 'מכלול לוגיסטיקה ותפעול', 
    headline: '8. מכלול לוגיסטיקה ותפעול', 
    text: `
      כשירות המכלול לביצוע משימותיו.
      תמ"צ שירותים חיוניים למול מדיניות התגוננות.
      תמ"צ היסעים, תחבורה וצמ"ה.
      כשירות מחסני החירום למתן מענה רשותי ולהקמת מתקנים.
      סיוע הניתן למפעלים חיוניים בגזרת הרשות, לפיקוד העורף ולארגוני החירום.
      פערים והמלצות לרכש, הפעלת חוזים נצורים, ויסות רשותי וסיוע חיצוני.
    `,
    video: 'path/to/video8.mp4' 
  },

  { 
    photo: '/assesment9.png', 
    title: 'מכלול משאבי אנוש ומנהל כללי', 
    headline: '9. מכלול משאבי אנוש ומנהל כללי', 
    text: `
      כשירות המכלול לביצוע משימותיו.
      תמ"צ כוח אדם למול צרכי הרשות והמלצות לצמצום הפערים.
      הנחיות לעובדי הרשות למול מדיניות התגוננות.
      תמ"צ תיירים וזרים (ברשות שזה רלוונטי).
      כשירות ואבטחת מערכות התקשוב והמידע.
      פערים והמלצות לפעולות תמיכה בעובדי הרשות.
    `,
    video: 'path/to/video9.mp4' 
  },


  { photo: '/assesment10.png', title: 'ארגוני חירום וגופי סיוע', headline: '10. ארגוני חירום וגופי סיוע', text: 'תמ"צ טיפול באירועים.  תמ"צ כוחות בשטח.', video: 'path/to/video10.mp4' },
  { 
    photo: '/assesment11.png', 
    title: 'מרכז שליטה ודיווח(מכלול מבצעים)', 
    headline: '11. מרכז שליטה ודיווח(מכלול מבצעים)', 
    text: `
      כשירות המכלול לביצוע משימותיו.
      תמ"צ מקלטים (ציבוריים ומשותפים) וכשירות צופרים.
      מדיניות ההתגוננות – משימות מרכזיות למימוש והמלצות.
      דרישות הרשות לסיוע חיצוני ודרישות גופי החירום מהרשות.
    `,
    video: 'path/to/video11.mp4' 
  },
    { 
      photo: '/assesment12.png', 
      title: 'ראש הרשות', 
      headline: '12. ראש הרשות', 
      text: `
        משימות מרכזיות – תעדוף וטיפול.
        סיכום והנחיות לביצוע.
      `,
      video: 'path/to/video12.mp4' 
    },
    // ... other entries
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
