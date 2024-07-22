import React, { useState } from 'react';
import PhotoList from './PhotoList';
import CardDetails from './CardDetails';
import './Gallery.css';

const cardData = [
  {
    photo: '/assesment1.png',
    title: 'ראש הראשות\ מנכ"ל (רמ"ט)',
    headline: '1. ראש הראשות\ מנכ"ל (רמ"ט)',
    text: (
      <>
        מטרה ומיקוד הנושאים המרכזיים בהערכת מצב
      </>
    ),
    video: '/ass1.mp4'
  },
  {
    photo: '/assesment2.png',
    title: 'מרכז שליטה ודיווח',
    headline: '2. מרכז שליטה ודיווח',
    text: (
      <>
        <b>אירועים מרכזיים</b> ברשות וסטאטוס הטיפול בהם.
        <br/>
        <b>תמ"צ כוחות וצוותים</b> בשטח.
        <br/>
        <b>סטאטוס מימוש החלטות</b> ראש הרשות/הרמ"ט.
      </>
    ),
    video: '/ass2.mp4'
  },
  {
    photo: '/assesment3.png',
    title: 'יקל"ר',
    headline: '3. יקל"ר',
    text: (
      <>
        תמ"צ צבאית - הערכת האיום, מצב משפטי, תמ"צ כוחות ומאמצים עיקריים בפקע"ר.  מדיניות התגוננות – מדיניות נוכחית ותמונת מצב מימוש המדיניות ופערים (פיקוח ואכיפה, פגיעה בשירותים חיוניים) + ריכוז החרגות הרשות.  תמ"צ אוכלוסייה - מגמות אוכלוסייה, צרכים והנחיות פיקוד העורף.  סטאטוס בקשות הסיוע של הרשות מפקע"ר ודרישות סיוע של פקע"ר מהרשות.
      </>
    )
    ,
    video: '/ass3.mp4'
  },
  {
    photo: '/assesment4.png',
    title: 'מכלול אוכלוסייה',
    headline: '4. מכלול אוכלוסייה',
    text: (<>
      כשירות המכלול לביצוע משימותיו מגמות התנהגות אוכלוסייה במרחב הרשות וצרכי האוכלוסייה.
      תמ"צ משאבי קהילה והתנדבות - משימות למול משאבים ופערים.
      תמ"צ רווחה – סטטוס שירותי רווחה ומסגרות למול מדיניות התגוננות.
      תמ"צ מתקני קליטה (במידה והופעל) – אוכ' ללא קורת גג, סטטוס נקלטים, סטטוס מתקנים ופערים.
      תמ"צ בריאות – סטטוס מתן שירותי רפואה למול מדיניות התגוננות.
      תמ"צ דת – סטטוס שירותי דת למול מדיניות התגוננות והיערכות ללוויות.
      תמ"צ עלייה וקליטה (במידה וקיים) – עולים במרכזי הקליטה ובקהילה: סטאטוס שירותים, צרכים ופערים.
      פערים והמלצות לטיפול, סיוע ותמיכה בתושבי הרשות.
    </>),
    video: '/ass4.mp4'
  },
  {
    photo: '/assesment5.png',
    title: 'מכלול חינוך',
    headline: '5. מכלול חינוך',
    text: (<>
      כשירות המכלול לביצוע משימותיו.
      תמ"צ לימודים פדגוגי – אופן ביצוע לימודים למול מדיניות התגוננות, מוכנות מוסדות החינוך ופערים.
      תמ"צ חינוך מיוחד – משמעויות ממדיניות ההתגוננות ואופן התמיכה בילדים.
      תמ"צ חינוך בלתי פורמלי – סטטוס פעילויות חינוכיות למול מדיניות התגוננות.
      תמ"צ מסגרות לילדי עובדים – סטטוס הפעלה ופערים.
      פערים והמלצות לפעילויות הפגה ופעילויות להספקת שירותי חינוך ותמיכה בילדים.
    </>),
    video: '/ass5.mp4'
  },
  {
    photo: '/assesment6.png',
    title: 'מכלול מידע לציבור',
    headline: '6. מכלול מידע לציבור',
    text: (<>
      כשירות המכלול לביצוע משימותיו.
      מדד תודעת שירות לתושב – סטטוס המענה לפניות התושבים.
      תמ"צ צרכי התושבים – מפלטפורמות הרשות: פילוח פניות ע"פ נושאים וקהלי יעד.
      תמ"צ מימוש תוכנית ההסברה היומית שסוכמה.
      המסרים העיקריים לתוכנית הסברה ליממה הקרובה.
      פערים והמלצות לפעילות הסברה ולפעולות מענה לצרכי התושבים.
    </>),
    video: '/ass6.mp4'
  },

  {
    photo: '/assesment7.png',
    title: 'מכלול הנדסה ותשתיות',
    headline: '7. מכלול הנדסה ותשתיות',
    text: (<>
      כשירות המכלול לביצוע משימותיו.
      כ"א, קבלנים, חומרים, ציוד הנדסי.
      תמ"צ תשתיות ומבנים – רמת הפגיעה במבנים ורמת הנזק בתשתיות.
      פעילות לצמצום הסכנות מחומ"ס ומפגעי סביבה.
      פערים והמלצות לתעדוף לטיפול במבנים ובתשתיות.
    </>),
    video: '/ass7.mp4'
  },

  {
    photo: '/assesment8.png',
    title: 'מכלול לוגיסטיקה ותפעול',
    headline: '8. מכלול לוגיסטיקה ותפעול',
    text: (<>
      כשירות המכלול לביצוע משימותיו.
      תמ"צ שירותים חיוניים למול מדיניות התגוננות.
      תמ"צ היסעים, תחבורה וצמ"ה.
      כשירות מחסני החירום למתן מענה רשותי ולהקמת מתקנים.
      סיוע הניתן למפעלים חיוניים בגזרת הרשות, לפיקוד העורף ולארגוני החירום.
      פערים והמלצות לרכש, הפעלת חוזים נצורים, ויסות רשותי וסיוע חיצוני.
    </>),
    video: '/ass8.mp4'
  },

  {
    photo: '/assesment9.png',
    title: 'מכלול משאבי אנוש ומנהל כללי',
    headline: '9. מכלול משאבי אנוש ומנהל כללי',
    text: (<>
      כשירות המכלול לביצוע משימותיו.
      תמ"צ כוח אדם למול צרכי הרשות והמלצות לצמצום הפערים.
      הנחיות לעובדי הרשות למול מדיניות התגוננות.
      תמ"צ תיירים וזרים (ברשות שזה רלוונטי).
      כשירות ואבטחת מערכות התקשוב והמידע.
      פערים והמלצות לפעולות תמיכה בעובדי הרשות.
    </>),
    video: '/ass9.mp4'
  },


  { photo: '/assesment10.png', title: 'ארגוני חירום וגופי סיוע', headline: '10. ארגוני חירום וגופי סיוע', text: 'תמ"צ טיפול באירועים.  תמ"צ כוחות בשטח.', video: '/ass10.mp4' },
  {
    photo: '/assesment11.png',
    title: 'מרכז שליטה ודיווח(מכלול מבצעים)',
    headline: '11. מרכז שליטה ודיווח(מכלול מבצעים)',
    text: (<>
      כשירות המכלול לביצוע משימותיו.
      תמ"צ מקלטים (ציבוריים ומשותפים) וכשירות צופרים.
      מדיניות ההתגוננות – משימות מרכזיות למימוש והמלצות.
      דרישות הרשות לסיוע חיצוני ודרישות גופי החירום מהרשות.
    </>),
    video: '/ass2.mp4'
  },
  {
    photo: '/assesment12.png',
    title: 'ראש הרשות',
    headline: '12. ראש הרשות',
    text: (<>
      משימות מרכזיות – תעדוף וטיפול.
      סיכום והנחיות לביצוע.
    </>),
    video: '/ass1.mp4'
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

  const handleBackToList = () => {
    setSelectedCardIndex(null);
  };

  const handlePrintGalleryClick = () => {
    window.open(`${process.env.PUBLIC_URL}/עזר - הערכת מצב רשות.pdf`, '_blank');
  };

  return (
    <div className="gallery">
      <h1 className="Gallery-title">הערכת מצב ברשות המקומית</h1>
      {selectedCardIndex === null ? (
        <div id='temp-title'>
          <p className="gallery-subtitle">
            לפניך סדר הדוברים המומלץ לביצוע הערכת מצב בשעת חירום
            <br />
            <img src={process.env.PUBLIC_URL + '/table.jpg'} className="table-gallery" alt="table"></img>
            <br />
            <br />
            <br />
            <b>
              יש להקפיד על סדר הדוברים, להתמקד בהצפת פערים והמלצות חיוניות לאפקטיביות הערכת המצב
            </b>
            <br />
            <br />
            בלחיצה על כל דובר יפתח חלון עם הסבר נוסף וסרטון הדגמה -
            <img src={process.env.PUBLIC_URL + '/hpArrow.png'} className="hpArrow-gallery" alt="Ogen"></img>
          </p>
        </div>
      ) : null}

      {selectedCardIndex === null ? (
        <PhotoList data={cardData} onPhotoClick={handlePhotoClick} />
      ) : (
        <>
          <CardDetails card={cardData[selectedCardIndex]} />

          <div className="navigation-buttons">
            <div onClick={handleNext} alt="Next" className="arrowDiv">הבא בתור</div>
            <div onClick={handlePrevious} alt="Previous" className="arrowDiv arrowDivLeft"> הקודם</div>
            <div onClick={handleBackToList} className='prev-btn-gallery'> חזרה לסדר דוברים</div>
          </div>
        </>
      )}

      <div className='btn-print-gallery' onClick={handlePrintGalleryClick}>
        <img src={process.env.PUBLIC_URL + '/print.png'} className="print-img-gallery" alt="print"></img>
        <p className='text-print'>הורדת גרסה להדפסה</p>
      </div>
    </div>
  );
};

export default Gallery;