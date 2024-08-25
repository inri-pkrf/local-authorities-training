import React, { useState, useEffect } from 'react';
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

  const handlePrintDiagramClick = () => {
    window.open(`${process.env.PUBLIC_URL}/מבנה הרשות המקומית בשעת חירום.pdf`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="diagram-container">
      <img src={process.env.PUBLIC_URL + '/mivne.png'} className="mivne" alt="Diagram" />

      <h1 className="diagram-title">מבנה הרשות המקומית בשעת חירום</h1>
      <div className="subtitle-diagram">
        בכדי לפעול באופן מיטבי בשעת חירום, הרשות המקומית משנה תצורה ופעולת במכלולים המחולקים לתחומי אחריות.
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <img src={process.env.PUBLIC_URL + '/setup.jpg'} class="setup" alt="setup"></img>

        בלחיצה על כל רכיב יפתח חלון עם הסבר נוסף -
      </div>

      <img src={process.env.PUBLIC_URL + '/hpArrow.png'} class="hpArrow-diagram" alt="Ogen"></img>


      <div className="line"></div>
      
      <div className='all-diagram'>

        <div className="frame"
          onClick={() => handleBoxClick('ראש הרשות',
            (<>
              טקסט חסר, יש להשלים מקור.
            </>),
            '#555555')}
        >
          <p className="frame-text">ראש הרשות</p>
        </div>

        <div
          className="black-frame"
          onClick={() => handleBoxClick(' מנכ"ל / רמ"ט',
            (<>
              טקסט חסר, יש להשלים מקור.
            </>),
            '#000000')}
        >
          <p className="black-frame-text"> מנכ"ל / רמ"ט </p>
        </div>

        <div className="blue-frame blue-box" onClick={() => handleBoxClick('אגף חירום וביטחון',
          (<>
            <b>תפקיד המכלול: ניהול עבודת המטה של הרשות המקומית בחירום</b>
            <ul>
              <li>הפעלה של מרכז ההפעלה ומערכי השליטה, הדיווח והבקרה;
              </li>
              <li>ריכוז התמ"ץ הרשותי מכלל המכלולים לכדי תמונת מצב אחידה;
              </li>
              <li>ביצוע בקרה ומעקב אחר הנחיות ראש הרשות ומנהל הלחימה במרכז ההפעלה;
              </li>
              <li>הפעלת הכוחות המבצעיים ברשות בהתאם לצורך;</li>
              <li>וידוא פעילות הרשות בהתאם לשעון הפעילות הרשותי בחירום;
              </li>
              <li>הפעלת חפ"ק רשותי במקרה הצורך, או השתלבות בחפ"ק אחוד של מנהל האירוע בשטח;
              </li>
              <li>הפעלת מערכי החירום לפי תפיסת ההפעלה ובכפוף להחלטת ראש הרשות;
              </li>
              <li>תיאום אופרטיבי של הרשות מול גורמי החירום והביטחון ומתן מענה בחירום;
              </li>
            </ul>
            <br />
            <b>תאים במסגרת המכלול:
            </b>
            <br />
            - תא חירום וביטחון
            <br />
            - תא מבצעים (שליטה ודיווח)
            <br />
            - תא ניהול שולחן מרכזי
          </>)
          ,
          '#6daae2')}>
          <p className="colored-box-text">אגף  <br />חירום וביטחון </p>
        </div>

        <div className='dotLine' >..............</div>

        <div className="orange-box" onClick={() => handleBoxClick('יק"לר',
          (<>
            טקסט חסר, יש להשלים מקור.
          </>)
          , '#d87b3c')}>
          <p className="colored-box-text">יקל"ר</p>
        </div>


        <div className="red-box" onClick={() => handleBoxClick('כוחות ביטחון',
          (<>
            טקסט חסר, יש להשלים מקור.
          </>)
          , '#db3f3f')}>
          <p className="colored-box-text">כוחות ביטחון</p>
        </div>

        <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול אוכלוסייה',
          (<>
            <b>תפקיד המכלול: מתן מענה לתושבי הרשות ע"פ יעדי השירות בתחומים: רווחה, בריאות, פס"ח ודת
            </b>
            <ul>
              <li>גיבוש תמונת מצב והערכת מצב האוכלוסייה ברשות, חיזוי התנהגותה וצרכיה וגיבוש תוכניות פעולה בהתאם;
              </li>
              <li>
                העברת נתונים על האוכלוסייה באזור האירוע ומסירתם לגוף החירום המנהל את האירוע (צה"ל-פיקוד העורף או משטרת ישראל)
              </li>
              <li>
                איתור ואבחון קבוצות אוכלוסייה הנזקקות לסיוע לאור המצב ומתן המענה הנדרש בתיאום עם מטה החירום הרשותי;
              </li>
              <li>
                תיאום עם הגורמים המקצועיים החיצוניים לרשות בכל הקשור למתן שירותים לאוכלוסייה, כגון קופות החולים, משרד הבריאות הנפתית/מחוזית, משרד הרווחה, משרד עלייה וקליטה, מועצות דתיות, חברות קבורה, המוסד לביטוח לאומי, משרד הבריאות, קצין ההתנהגות ביקל"ר;
              </li>
              <li>זימון וריכוז פעילות הוועדה לפס"ח;
              </li>
              <li>זימון וריכוז פעילות הוועדה להתנדבות;
              </li>
              <li>ניהול מתקני הקליטה של מפונים חסרי קורת גג - בהתייעצות עם ועדת פס"ח;
              </li>
              <li>פתיחת תחנת ריכוז חללים מקומית/מרחבית לפי הנחיית רשות פס"ח;
              </li>
              <li>מתן מענה לצורכי התושבים באמצעות מערך המתנדבים ומערכים קהילתיים
              </li>
            </ul>
            <br />
            <b>תאים במסגרת המכלול:
            </b>    <br />
            - תא רווחה
            <br />
            - תא בריאות
            <br />
            - תא פס"ח (קליטה וחללים)
            <br />
            - תא דת
            <br />
            - תא קליטת עליה
            <br />
            - תא מתנדבים (משאבי קהילה)
            <br />
            - צוותי התערבות
          </>)
          , '#044188')}>
          <p className="colored-box-text">מכלול <br /> אוכלוסייה</p>
        </div>

        <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול החינוך',
          (<>
            <b>תפקיד המכלול: מתן מענה לתושבי הרשות ע"פ יעדי השירות בתחומי החינוך וקביעת מתכונת הפעלת מסגרות החינוך הפורמלי והבלתי פורמלי ע"פ ההנחיות
            </b>
            <ul>
              <li>הפעלת מערכת החינוך הרשותית בהתאם להחלטות ראש הרשות ומטה החירום הרשותי והנחיות פיקוד העורף
              </li>
              <li>להעלות צרכים ודרישות למחוז משרד החינוך בסיוע המפקח המתכלל הרשותי
              </li>
              <li>לסייע למכלול אוכלוסייה בקליטת אוכלוסייה מפונה במוסדות חינוך המשמשים כמתקני קליטה - על-פי נוהל 24 של פס"ח ונוהל 13 ב"חוזר מנכ"ל משרד החינוך לשעת-חירום"
              </li>
              <li>לשלב את מוסדות הקהילה, מתנ''ס ומנו''ס (מנהל נוער וספורט) במענים ובפתרונות לצורכי מערכת החינוך
              </li>
              <li>להפעיל את מערך ההסעות לתלמידים בהתאם לפעילות מוסדות החינוך ובתיאום עם מכלול לוגיסטיקה
              </li>
              <li>להפעיל תכניות חירום בתחומים הבאים: תכנית למידה בחירום, תוכנית למידה מרחוק, תוכניות הפגה, הפעלת בני נוער מתנדבים, תמיכה נפשית ועוד</li>
            </ul>
            <br />
            <b> תאים במסגרת המכלול:
            </b>
            <br />
            - תא חינוך פורמלי
            <br />
            - תא חינוך בלתי פורמלי
            <br />
            - תא חינוך מוכר שאינו רשמי
          </>)
          , '#044188')}>
          <p className="colored-box-text">מכלול  <br />החינוך</p>
        </div>

        <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול מידע לציבור',
          (<>
            <b>
            תפקיד המכלול: מתן מענה לתושבי הרשות ע"פ יעדי השירות בתחום המידע לציבור תוך שימוש באמצעי מדיה שונים, הפעלת המוקד העירוני והפצת המסרים וההנחיות לציבור
            </b>
            <ul>
              <li>מתן מענה לפניות התושבים במידע השוטף הקשור לשירותים המוניציפאליים
              </li>
              <li>הכנת תכניות לימודים למלחמה בהתאם לתפוסת המקלטים והמרחבים המוגנים במוסדות החינוך והכנת תכניות עבור מוסדות חינוך חסרי מיגון לקיום לימודים במוסדות חליפיים ממוגנים, בהתאמה למדרגי מדיניות ההתגוננות (בהכרזת "מצב מיוחד בעורף")
              </li>
              <li>ספק מידע על השינויים באספקת שירותים חיוניים לאוכלוסייה הניתנים על-ידי רשויות ממלכתיות (בריאות, חינוך, תחבורה, דלק וכדומה)
              </li>
              <li>יסוף נתונים, עיבודם וגיבוש תמונת מצב המתבססת על המידע המתקבל ביחידת דוברות, מוקד, ובשירותים הדיגיטאליים. והעברתה לגורמים רלוונטיים ברשות על-פי תזמון שנקבע מראש
              </li>
              <li>כתיבת תכנית הסברה רשותית הנגזרת מתמונת המצב שגובשה וכוללת: מסרים ומידע נדרש ואופן הפצתם באמצעים הקיימים ברשות
              </li>
              <li>ביצוע פעולות הסברה והפצת מידע לקבוצות אוכלוסייה עם צרכים מיוחדים ולמגזרים השונים, בתיאום עם המכלולים האחרים ובדגש על מכלול הטיפול באוכלוסייה
              </li>
              <li>ייזום פרסומים והודעות לאמצעי התקשורת, וסיקור עיתונאי של האירועים
              </li>
              <li>ייזום מסרים תומכים לאוכלוסייה על רקע תמונת המצב המשתקפת ברשות
              </li>
              <li>תאום מסרים עם כלל גורמי החירום הרלוונטיים: פיקוד העורף, מידע לציבור ברח"ל, מרכזי מידע בבתי חולים וארגוני החירום: מד"א,כב"ה, מ"י
              </li>
              <li>לצפות ולהאזין לפרסומים בתקשורת באופן רצוף על מנת להכיר ולדעת את המידע המפורסם שיכול להיות בסיס לפניות רבות של הציבור
              </li>
            </ul>
            <br />
            <b> תאים במסגרת המכלול:
            </b>
            <br />
            - תא מוקד עירוני
            <br />
            - תא דוברות
            <br />
            - תא דוברות
            <br />
            -  תא שירותים דיגיטליים
            <br />
            - לשכת המידע
          </>)
          , '#044188')}>
          <p className="colored-box-text">מכלול <br /> מידע לציבור</p>
        </div>

        <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול הנדסה ותשתיות',
          (<>
            <b>תפקיד המכלול: מתן מענה לתושבי הרשות ע"פ יעדי השירות בתחומי הנדסה, חשמל, מים וביוב, דרכים והגנת הסביבה
            </b>
            <ul>
              <li>הערכת נזקים במבנים ובתשתיות לאחר אירוע באמצעות מהנדסים ואדריכלים המוכשרים לכך וגיבוש המלצה הנדסית על מבנים שנפגעו באשר לאפשרות החזרת האוכלוסייה להתגורר בהם והמשך הטיפול
              </li>
              <li>המשך מתן שירותים מוניציפליים חיוניים לאוכלוסייה בתחומי מים, ביוב, דרכים, ניקוז ובינוי
              </li>
              <li>הפעלת "צוותי שטח הנדסה ותשתיות" של הרשות
              </li>
              <li>הפעלת תכנית גיבוי לאספקת מים חלופיים בתחנות חלוקה. באזורים השונים של הרשות והפעלתה באזור שנפגע
              </li>
              <li>הפעלת גנרטורים כגיבוי לאספקת חשמל, לאתרי קליטה ולמתקנים נוספים שבאחריות הרשות ולסיוע במוקדי האירוע</li>
              <li>תיאום תיקון מהיר של דרכים, של מבנים ושל תשתיות חיוניות על ידי צוותי השטח או על ידי קבלנים להבטחת צירים פנויים וכדי לאפשר את החזרת שגרת החיים מהר ככל הניתן
              </li>
              <li>עדכון מכלול המידע לציבור במידע הנחוץ לציבור בתחומי עיסוק המכלול, כגון: מיקום פריסת מכלי מים ניידים, תיקון מבנים וצירים חסומים ופנויים ועוד
              </li>
              <li>קיום יחסי גומלין עם מחזיקי חומ"ס במרחב הרשות
              </li>
              <li>מיפוי וטיפול במפגעים סביבתיים (בתאום עם מחוז הגנ"ס), כגון: אויר, אסבסט, זיהום חופים, קרינה, סביבה חקלאית, שפכים וקרקעות מזוהמות (פסולת ומזיקים מטופלים במכלול לוגיסטיקה)
              </li>
            </ul>
            <br />
            <b>תאים במסגרת המכלול:
            </b>
            <br />
            - תא תא הנדסה ובינוי
            <br />
            - תא חשמל
            <br />
            - תא מים וביוב
            <br />
            - תא דרכים
            <br />
            - תא הגנ"ס
            <br />
            - צוותי שטח, הנדסה ותשתיות
          </>)
          , '#044188')}>
          <p className="colored-box-text">מכלול <br /> הנדסה ותשתיות</p>
        </div>

        <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול לוגיסטיקה ותפעול',
          (<>
            <b>תפקיד המכלול: מתן מענה לוגיסטי, בהתאם לרמות השירות שנקבעו לחירום, בתחומי השירותים הלוגיסטיים והשירותים החיוניים הקשורים ב: מזון, דלק, גפ"ם, תובלה, צמ"ה, היסעים, פיקוח, משכ"ל, מחסנים.
            </b>
            <ul>
              <li>תמיכה לוגיסטית בכוחות העירייה הפועלים בחירום, ניהול השירותים הלוגיסטיים והתפעוליים של העיר (כגון מזון לעובדים, דלק, רכב, צמ"ה, היסעים, תובלה יבשתית, גנרטורים), לרבות בעת אירוע;
              </li>
              <li>ניהול מחסני החירום (ציוד למתקני קליטה, אמצעֵי תאורת חירום, גנרטורים) ומלאי החירום של הרשות בדלק וגפ"ם, ציוד וחלפים הדרושים לפעילות בעיר;</li>
              <li>תפעול מערך ההיסעים של העירייה, לרבות ביצוע ההסעות של מערכת החינוך בהתאם לתוכנית, בכפוף למדיניות החירום, ביצוע הסעות לעובדי העירייה לאיוש המשמרות ברציפות וסיוע לפעילות שבאחריות העירייה;
              </li>
              <li>שינוע ציוד ממחסני החירום העירוניים (לרבות ממחסני פס"ח העירוניים והמחוזיים);
              </li>
              <li>מסירת מידע לאוכלוסייה, באמצעות מכלול המידע לציבור על מערך שירותים חיוניים, כגון: מרכולים, תחבורה ציבורית, דלק וגפ"ם, בנקאות, דואר, משרדי ממשלה ובנקים הפתוחים בחירום, שיאפשרו ניהול שגרת חירום;
              </li>
              <li>מתן שירותי תברואה לאוכלוסייה ולעסקים;
              </li>
            </ul>
            <br />
            <b>תאים במסגרת המכלול:
            </b>
            <br />
            - תא משכ"ל
            <br />
            - תא רכש
            <br />
            - תא מזון
            <br />
            - תא היסעים
            <br />
            - תא דלק
            <br />
            - תא תובלה
            <br />
            - תא פיקוח
            <br />
            - תא תעבורה
          </>)
          , '#044188')}>
          <p className="colored-box-text">מכלול  <br />לוגיסטיקה ותפעול</p>
        </div>

        <div className="colored-box-sub" onClick={() => handleBoxClick('מכלול משא"ן ומנהל כללי',
          (<>
            <b>תפקיד המכלול: מתן מענה כללי בהתאם לרמות השירות שנקבעו לחירום בהיבטים: כוח האדם, התיירים, התקשוב.</b>
            <ul>
              <li>גיבוש תמ"ץ בנושא כוח אדם, תיירות ותקשוב ברשות המקומית
              </li>
              <li>השלמות איוש או תגבור כוח האדם בגופי הרשות בהתאם לצורכי החירום, על-ידי השמת עובדים מרותקים משקיים</li>
              <li>מתן שירותי תברואה והגנת הסביבה לאוכלוסייה ולעסקים
              </li>
              <li>טיפול בתיירים בהתאם למדיניות הממשלה
              </li>
              <li>מתן מענה תקשובי לרשות ווידוא אבטחת מערכות המידע כנגד איומי הסייבר</li>
            </ul>
            <br />
            <b>תאים במסגרת המכלול:
            </b>
            <br />
            - תא כוח אדם
            <br />
            - תא תיירות
            <br />
            - תא מחשוב
          </>)
          , '#044188')}>
          <p className="colored-box-text"> מכלול <br /> משא"ן ומנהל כללי</p>
        </div>

      </div>


      <PopUp
        isVisible={isPopupVisible}
        onClose={closePopup}
        title={popupContent.title}
        content={popupContent.content}
        color={popupContent.color} // Pass color to the popup component
      />

      <div className='btn-print-diagram' onClick={handlePrintDiagramClick}>
        <img src={process.env.PUBLIC_URL + '/print.png'} className="print-img-diagram" alt="print"></img>
        <p className='text-print-diagram'>הורדת גרסה להדפסה</p>
      </div>

    </div>
  );
};

export default Diagram;
