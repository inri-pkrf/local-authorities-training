import React, { useState } from 'react';
import PhotoList from './PhotoList';
import CardDetails from './CardDetails';
import './Gallery.css';

const cardData = [
  {
    photo: '/assesment1.png',
    title: 'ראש הרשות\ מנכ"ל (רמ"ט)',
    headline: '1. ראש הרשות\ מנכ"ל (רמ"ט)',
    text: (
      <>
      <b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
        מטרה ומיקוד הנושאים המרכזיים בהערכת מצב
      </>
    ),
    video: '/ass1.mp4'
  },
  {
    photo: '/assesment2.png',
    title: 'מרכז שליטה ודיווח (מבצעים)',
    headline: '2. מרכז שליטה ודיווח (מבצעים)',
    text: (
      <><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
        <b>אירועים מרכזיים</b> ברשות וסטאטוס הטיפול בהם.
        <br />
        <b>תמ"צ כוחות וצוותים</b> בשטח.
        <br />
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
      <><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
        <b>תמ"צ צבאית -</b> הערכת האיום, מצב משפטית, תמ"צ כוחות ומאמצים עיקריים בפקע"ר.
        <br />
        <b> מדיניות התגוננות –</b> מדיניות נוכחית ותמונת מצב
        מימוש המדיניות ופערים (פיקוח ואכיפה, פגיעה
        בשירותים חיוניים) + ריכוז החרגות הרשות.
        <br />
        <b>תמ"צ אוכלוסייה -</b> מגמות אוכלוסייה, צרכים
        והנחיות פיקוד העורף.
        <br />
        <b>סטאטוס בקשות הסיוע</b> של הרשות מפקע"ר
        ודרישות סיוע של פקע"ר מהרשות.
      </>
    )
    ,
    video: '/ass3.mp4'
  },
  {
    photo: '/assesment4.png',
    title: 'מכלול אוכלוסייה',
    headline: '4. מכלול אוכלוסייה',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>כשירות המכלול לביצוע משימותיו.</b>
      <br />
      <b>מגמות התנהגות אוכלוסייה במרחב הרשות וצרכי האוכלוסייה.</b>
      <br />
      <b>תמ"צ משאבי קהילה והתנדבות -</b> משימות למול משאבים ופערים.
      <br />
      <b>תמ"צ רווחה –</b> סטטוס שירותי רווחה ומסגרות למול מדיניות התגוננות.
      <br />
      <b>תמ"צ מתקני קליטה</b> (במידה והופעל) – אוכ' ללא קורת גג, סטטוס נקלטים,
      סטטוס מתקנים ופערים.
      <br />
      <b>תמ"צ בריאות –</b> – סטטוס מתן שירותי רפואה למול מדיניות התגוננות.
      <br />
      <b> תמ"צ דת –</b> סטטוס שירותי דת למול מדיניות התגוננות והיערכות ללוויות.
      <br />
      <b>תמ"צ עלייה וקליטה</b>(במידה וקיים) – עולים במרכזי הקליטה ובקהילה: סטאטוס
      שירותים, צרכים ופערים. <b>פערים והמלצות</b> לטיפול, סיוע ותמיכה בתושבי הרשות.
    </>),
    video: '/ass4.mp4'
  },
  {
    photo: '/assesment5.png',
    title: 'מכלול חינוך',
    headline: '5. מכלול חינוך',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>כשירות המכלול לביצוע משימותיו.</b>
      <br />
      <b>תמ"צ לימודים פדגוגי –</b> – אופן ביצוע לימודים למול
      מדיניות התגוננות, מוכנות מוסדות החינוך ופערים.
      <br />
      <b>תמ"צ חינוך מיוחד –</b> משמעויות ממדיניות ההתגוננות
      ואופן התמיכה בילדים.
      <br />
      <b>תמ"צ חינוך בלתי פורמלי –</b> – סטטוס פעילויות חינוכיות
      למול מדיניות התגוננות.
      <br />
      <b>תמ"צ מסגרות לילדי עובדים –</b>סטטוס הפעלה ופערים.
      <br />
      <b>פערים והמלצות</b> לפעילויות הפגה ופעילויות להספקת
      שירותי חינוך ותמיכה בילדים.
    </>),
    video: '/ass5.mp4'
  },
  {
    photo: '/assesment6.png',
    title: 'מכלול מידע לציבור',
    headline: '6. מכלול מידע לציבור',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>כשירות המכלול לביצוע משימותיו.</b>
      <br />
      <b>מדד תודעת שירות לתושב –</b> סטטוס המענה לפניות התושבים.
      <br />
      <b>תמ"צ צרכי התושבים –</b> מפלטפורמות הרשות: פילוח פניות ע"פ נושאים
      וקהלי יעד.
      <br />
      <b>תמ"צ מימוש תוכנית ההסברה</b> היומית שסוכמה.
      <br />
      <b>המסרים העיקריים לתוכנית הסברה</b> ליממה הקרובה.
      <br />
      <b>פערים והמלצות</b> לפעילות הסברה ולפעולות מענה לצרכי התושבים.
    </>),
    video: '/ass6.mp4'
  },

  {
    photo: '/assesment7.png',
    title: 'מכלול הנדסה ותשתיות',
    headline: '7. מכלול הנדסה ותשתיות',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>כשירות המכלול לביצוע משימותיו -</b> כ"א, קבלנים,
      חומרים, ציוד הנדסי.
      <br />
      <b>תמ"צ תשתיות ומבנים –</b> רמת הפגיעה במבנים ורמת
      הנזק בתשתיות.
      <br />
      <b>פעילות לצמצום הסכנות מחומ"ס</b> ומפגעי סביבה.
      <br />
      <b>פערים והמלצות לתעדוף</b> לטיפול במבנים ובתשתיות.
    </>),
    video: '/ass7.mp4'
  },

  {
    photo: '/assesment8.png',
    title: 'מכלול לוגיסטיקה ותפעול',
    headline: '8. מכלול לוגיסטיקה ותפעול',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>כשירות המכלול לביצוע משימותיו.</b>
      <br />
      <b>תמ"צ שירותים חיוניים</b> למול מדיניות התגוננות.
      <br />
      <b>תמ"צ היסעים, תחבורה וצמ"ה.</b>
      <br />
      <b>כשירות מחסני החירום</b> למתן מענה רשותי ולהקמת מתקנים.
      <br />
      <b>סיוע הניתן למפעלים חיוניים</b> בגזרת הרשות, לפיקוד העורף ולארגוני החירום.
      <br />
      <b>פערים והמלצות</b> לרכש, הפעלת חוזים נצורים, ויסות רשותי וסיוע חיצוני.
    </>),
    video: '/ass8.mp4'
  },

  {
    photo: '/assesment9.png',
    title: 'מכלול משאבי אנוש ומנהל כללי',
    headline: '9. מכלול משאבי אנוש ומנהל כללי',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>תמ"צ כוח אדם</b> למול צרכי הרשות והמלצות לצמצום הפערים.
      <br />
      <b>הנחיות לעובדי הרשות</b> למול מדיניות התגוננות.
      <br />
      <b>תמ"צ תיירים וזרים</b> (ברשות שזה רלוונטי).
      <br />
      <b>כשירות ואבטחת מערכות התקשוב והמידע.</b>
      <br />
      <b>פערים והמלצות</b> לפעולות תמיכה בעובדי הרשות.
    </>),
    video: '/ass9.mp4'
  },
  {
    photo: '/assesment10.png',
    title: 'ארגוני חירום וגופי סיוע',
    headline: '10. ארגוני חירום וגופי סיוע',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>תמ"צ טיפול באירועים.</b>
      <br />
      <b>תמ"צ כוחות בשטח.</b>
    </>),
    video: '/ass10.mp4'
  },
  {
    photo: '/assesment11.png',
    title: 'מרכז שליטה ודיווח (מבצעים)',
    headline: '11. מרכז שליטה ודיווח (מבצעים)',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
      <b>כשירות המכלול לביצוע תפקידיו.</b>
      <br />
      <b>תמ"צ מקלטים</b> (ציבוריים ומשותפים) וכשירות צופרים.
      <br/>
      <b>מדיניות ההתגוננות –</b> משימות מרכזיות למימוש והמלצות.
      <br/>
      <b>דרישות הרשות לסיוע חיצוני</b> ודרישות גופי החירום מהרשות.
    </>),
    video: '/ass2.mp4'
  },
  {
    photo: '/assesment12.png',
    title: 'ראש הרשות',
    headline: '12. ראש הרשות',
    text: (<><b>תפקיד המכלול בהערכת מצב:</b>
      <br /> <br />
     <b>משימות מרכזיות –</b> תעדוף וטיפול.
     <br/>
     <b>סיכום והנחיות לביצוע.</b>
    </>),
    video: '/ass1.mp4'
  },

];


const Gallery = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhotoClick = (index) => {
    setSelectedCardIndex(index);
    scrollToTop();  // Scroll to the top when opening CardDetails
  };

  const handleNext = () => {
    setSelectedCardIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % cardData.length;
      scrollToTop();  // Scroll to the top when navigating to the next card
      return newIndex;
    });
  };

  const handlePrevious = () => {
    setSelectedCardIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + cardData.length) % cardData.length;
      scrollToTop();  // Scroll to the top when navigating to the previous card
      return newIndex;
    });
  };

  const handleBackToList = () => {
    setSelectedCardIndex(null);
    scrollToTop();  // Scroll to the top when returning to the PhotoList
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
            לפניך סדר הדוברים לביצוע הערכת מצב בשעת חירום
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
            בלחיצה על כל דובר יפתח חלון עם הסבר נוסף וסרטון הדגמה
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

      {selectedCardIndex === null && (
        <div className='btn-print-gallery' onClick={handlePrintGalleryClick}>
          <img src={process.env.PUBLIC_URL + '/print.png'} className="print-img-gallery" alt="print"></img>
          <p className='text-print'>הורדת גרסה להדפסה</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;