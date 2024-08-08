import React, { useEffect, useState } from 'react';
import './InterfacesTarget.css';

function InterfacesTarget({ selectedItemStep1, selectedItemsStep2, setTitle, selectedItemColor }) {
    const [connections, setConnections] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = {
        "מרכז שליטה רשותי": [
            {
                name: "יעד ומזון למים",
                connections: [
                    "מענה רשותי לאספקה וחלוקת מים.",
                    "מענה רשותי לחלוקת מזון.",
                    "תוכנית להנגשת מידע אודות החנויות לממכר מזון הפתוחות בחירום."
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    "מענה רשותי למחוסרי מרחב מוגן.",
                    "איתור מחסות ציבוריים והפעלתם.",
                    "מנגנון לגיבוש תמ\"צ מפונים ומתפנים.",
                    "מוכנות מתקני קליטה.",
                    "כשירות מקלטים ציבוריים ומנגנון לפתיחתם."
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    "תוכנית להקמת מרכז גנרציה ותפעולו.",
                    "תוכנית סיוע לחלוקת תרופות.",
                    "תוכנית להנגשת מידע אודות אופן קבלת שירותי רפואה בקהילה בחירום."
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    "תוכנית הצבת כ\"א למשימות הרשות.",
                    "מנגנון להעלאת התייצבות עובדים ותגבור כ\"א חיצוני.",
                    "תוכנית לפתיחת מסגרות לילדי עובדים.",
                    "תוכנית תמיכה ומניעת שחיקה לעובדים."
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    "וידוא תקינות גנרציה במתקנים חיוניים של הרשות.",
                    "איתור מרה\"פ חלופי.",
                    "הגדרה ורכש של מלאי דלק לתדלוק גנרטורים.",
                    "בניית יכולת הפצת מידע בהיעדר תקשורת סלולרית וקווית."
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    "תוכניות הסברה נצורות לאתגרים ולצרכים הצפויים ולתוכניות המענה הרשותיות.",
                    "בניית פלטפורמות מגוונות ויתירות להפצת מידע ומענה לתושבים."
                ]
            }
        ],
        "אוכלוסייה": [
            {
                name: "יעד ומזון למים",
                connections: [
                    'מיפוי אוכלוסייה: קשישים חסרי עורף משפחתי, חצר"מים, אנשים עם מוגבלויות.',
                    "תכנון מענה לחלוקת מזון ומים עד הבית לאוכלוסיות רווחה וקשר רציף עימם."
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    'מנגנון לגיבוש תמ"צ קליטה של תושבים מחוץ לרשות ותמ"צ מפונים תושבי רשות.',
                    "מנגנון לגיבוש תמ\"צ מחוסרי קורת גג וגיבוש מאגר פתרונות דיור חלופי.",
                    "מוכנות וכשירות לניהול מתקני הקליטה.",
                    "תוכנית לניהול מחסות ציבוריים."
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    'מיפוי אוכלוסייה: מונשמים/ נתמכי נשימה, מרותקים, ללא עורף משפחתי. .',
                    "תוכנית לניהול מרכז גנרציה.",
                    "הכרת המרפאות האחודות בשטח הרשות.",
                    "הכרת המרפאות עם מרחב מוגן וגנרציה.",
                    "מוכנות וכשירות צוותי התערבות בזירת אירוע צוות 'קו פתוח' במוקד."
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    'בניית מערך מתנדבים ומשאבי קהילה לתגבור כ"א למשימות הרשות.',
                    "תוכנית כ\"א לביצוע משימות המכלול: הצבת עובדים, מיפוי פערי התייצבות, מענה לעובדים, איתור והכשרת מתנדבים."
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    'מיפוי אוכלוסייה של מונשמים ונתמכי נשימה ודרכי התקשורת עימם, כולל כתובת מגורים.'
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    'מוכנות וכשירות צוות "קו פתוח" במוקד.',
                    'גיבוש מידע אודות פעילות השירותים בחירום: בריאות, רווחה ודת. מידע מומלץ למפונים ולנפגעים.',
                    'גיבוש מסרים ומידע תומך חוסן לאוכלוסייה.'
                ]
            }
        ],
        "חינוך": [
            {
                name: "יעד ומזון למים",
                connections: [
                    'תכנון תגבור כ"א מקצועי (חינוכי וטיפולי) למשימות מכלול אוכלוסייה.'
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    'מוכנות וכשירות כ"א וסגל חינוכי לניהול מתקני הקליטה.',
                    'ניהול סל קליטה לצורכי המפונים.',
                    'תוכנית חינוך ופעילות הפגה לילדי הנקלטים.'
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    'גיבוש כ"א מקצועי טיפולי לתמיכה נפשית (שפ"ח)לעיבוי צוותי ההתערבות.'
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    'בניית מערך מתנדבים בני נוער לתגבור כ"א למשימות הרשות.',
                    'פתיחת מסגרות לילדי עובדים.',
                    'תוכנית כ"א לביצוע משימות המכלול: הצבת עובדים, מיפוי פערי התייצבות, מענה לעובדים, איתור והכשרת מתנדבים.'
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    'מוכנות וכשירות הרדיו החינוכי ברשות (כ"א, מיגון, גנרציה), כולל אפשרות דילוג.'
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    'שימוש בפלטפורמות המידע של הסגל החינוכי עם הורי הילדים כפלטפורמה נוספת להפצת מידע בחירום.'
                ]
            }
        ],
        "מידע לציבור": [
            {
                name: "יעד ומזון למים",
                connections: [
                    'גיבוש תוכנית הסברה והפצת מידע על חנויות לממכר מזון הפתוחות בחירום ברשות, אופן אספקה וחלוקה של מים ומזון.'
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    'מנגנון להנגשת פתרונות ציבוריים (מקלטים, מחסות) לתושבים ללא מרחב מוגן ותיאום ציפיות לגבי התנאים.',
                    'גיבוש מידע למפונים במתקני קליטה והקמת לשכת מידע.'
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    'גיבוש תוכנית הסברה והפצת מידע על אופן פעילות שירותי הרפואה ברשות, הקמת מרכז גנרציה ואופן חלוקת תרופות.'
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    'גיבוש תוכנית הסברה לעידוד התנדבות בקרב תושבי הרשות.',
                    'תוכנית כ"א לביצוע משימות המכלול: הצבת עובדים, מיפוי פערי התייצבות, מענה לעובדים, איתור והכשרת מתנדבים.'
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    'גיבוש תוכנית הסברה והפצת מידע על תחנות צי ברזל, אספקת גפ"ם, שיבושים באספקת מים בבניינים גבוהים ואופן קבלת מידע בהיעדר תקשורת.',
                    'בניית יכולות להנחיית התושבים בהיעדר התרעה ותקשורת. וידוא גנרציה למערכות החיוניות הנדרשות להפצת מידע.'
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    'תוכנית הסברה תומכת לחוסן התושבים.'
                ]
            }
        ],
        "הנדסה ותשתיות": [
            {
                name: "יעד ומזון למים",
                connections: [
                    'איתור מרחבים מוגנים לטובת הקמת תחנות לחלוקת מים.'
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    'איתור מחסות ציבוריים.',
                    'מיפוי מחוסרי מרחב מוגן ברשות.',
                    'מיפוי מרחבים מוגנים ציבוריים ברשות: מקלטים ציבוריים מקלטי מוס"ח ומקלטים במתקני הקליטה.'
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    'איתור מבנה עם מיגון תקני להקמת מרכז גנרציה.',
                    'וידוא מלאי דלק לגנרטורים וליווי חשמלאי למרכז גנרציה.'
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    'תוכנית כ"א לביצוע משימות המכלול: הצבת עובדים, מיפוי פערים צפויים בחירום, גיבוש מענה לעובדים, איתור והכשרת מתנדבים.'
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    'מיפוי בניינים גבוהים בהם אספקת המים נשענת על משאבות.',
                    'איתור מרה"פ חלופי.'
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    'איתור מבנים עם מיגון תקני להקמת לשכות מידע.',
                    'איתור מוקד חלופי עם מיגון.'
                ]
            }
        ],
        "לוגיסטיקה ותפעול": [
            {
                name: "יעד ומזון למים",
                connections: [
                    'תוכנית להקמת תחנות לחלוקת מים ותיאום מול תאגיד המים.',
                    'הכרת סופרים ברזל בשטח הרשות.',
                    'חוזה נצור עם ספק מזון לאוכלוסיית רווחה לחלוקה עד הבית.',
                    'הקצאת רכבים למשימות חלוקת מים ומזון.'
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    'תוכנית להקמת מתקני הקליטה ומענה לוגיסטי: ציוד הלנה ופס"ח, אספקת מזון, הסעות נקלטים ותכנון רכש.',
                    'תוכנית לוגיסטית למחסות ציבוריים: אספקת מים, שירותים כימיים, ערכת עזרה ראשונה ואמצעי כריזה.'
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    'תוכנית הקמת מרכז גנרציה ומענה לוגיסטי: גנרציה, סניטציה, מים, אמצעי בטיחות.',
                    'סיוע בשינוע נתמכי נשימה.',
                    'הקצאת רכבים למשימת חלוקת תרופות.'
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    'בניית מערך הסעות, קייטרינג ומעטפת לוגיסטית לעובדים.',
                    'תוכנית כ"א לביצוע משימות המכלול: הצבת עובדים, מיפוי פערי התייצבות, מענה לעובדים, איתור והכשרת מתנדבים.'
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    'הכנה לגנרציה (תשתית) ותקינות גרציה במתקנים חיוניים של הרשות: מרה"פ, מוקד, מרכז גנרציה ומתקני קליטה.',
                    'וידוא מלאי דלק לכל צורכי הרשות.',
                    'הכרה של תחנות צי ברזל בשטח הרשות.',
                    'מנגנון לגיבוש תמ"צ פערים בדלק וגז ברשות וכשירות גנרציה.'
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    'גיבוש מידע על פעילות השירותים בחירום: פינוי אשפה, תחבורה ציבורית, מזון, דלק, גז ועוד.',
                    'סיוע בפתיחת לשכות מידע.',
                    'וידוא חוזה נצור מול בית דפוס מבוסס גנרטור.',
                    'תכנון רכש אמצעים אנלוגיים ואמצעי שטח (למשל כריזה).'
                ]
            }
        ],
        'משאבי אנוש ומנהל כללי' : [
            {
                name: "יעד ומזון למים",
                connections: [
                    'איתור ותכנון כ”א (כולל כ"א עם רכבים) למשימות חלוקת מים ומזון.'
                ]
            },
            {
                name: "יעד מחסה הולם",
                connections: [
                    'איתור ותכנון כ”א למשימות תפעול של מתקני הקליטה ומחסות ציבוריים.'
                ]
            },
            {
                name: "יעד שירותי רפואה",
                connections: [
                    'איתור ותכנון כ”א למשימות סיוע ושינוע של נתמכי נשימה למרכז גנרציה.',
                    'איתור כ"א עם כלי רכב למשימת חלוקת תרופות.'
                ]
            },
            {
                name: "מאפשר כוח אדם",
                connections: [
                    'תוכנית הצבת כ"א (מתנדבים ועובדים) למשימות הרשות. חיזוי פערי כ"א בחירום ובניית תוכנית להעלאת ההתייצבות.',
                    'תיאום ציפיות עם העובדים ואישור עובדים חיוניים. מנגנון לגיבוש תמ"צ התייצבות עובדים.',
                    'גיבוש פוטנציאל ילדי עובדים למסגרות.',
                    'בניית תוכנית תמיכה ומניעת שחיקה לעובדים.',
                    'גיוס ורישום מתנדבים להגדלת מאגר כ"א הרשותי.'
                ]
            },
            {
                name: "מאפשר אנרגיה",
                connections: [
                    'כשירות ורציפות בהפעלת מערכות התקשוב והמידע.',
                    'מנגנון ליצירת קשר והגדרת התייצבות עובדים בהיעדר תקשורת סלולרית ו/או קווית.',
                    'מיפוי יכולות כריזה במרחב הרשות.'
                ]
            },
            {
                name: "מאפשר מידע לציבור",
                connections: [
                    'איתור ותכנון כ“א למשימות מכלול מידע לציבור: כ"א מקצועי, מובילי דעת קהל, דוברי שפות, כ"א לתגבור יכולות מענה והפצת מידע.',
                    'תמיכה ווידוא רציפות בהפעלת מערכות הפצת המידע והמענה לתושבים.'
                ]
            }
        ]
    };

    // const colors = ['#6fa8dc', '#67d7b2', '#ea9999', '#f9cb9c', '#b4a7d6', '#b7b7b7'];

    const correctColors = [
        { string: "יעד ומזון למים", color: "#6fa8dc" },
        { string: "יעד מחסה הולם", color: "#67d7b2" },
        { string: "יעד שירותי רפואה", color: "#ea9999" },
        { string: "מאפשר כוח אדם", color: "#f9cb9c" },
        { string: "מאפשר אנרגיה", color: "#b4a7d6" },
        { string: "מאפשר מידע לציבור", color: "#b7b7b7" },
    ];

    const items = data[selectedItemStep1] || [];

    useEffect(() => {
        const currentItem = items[currentIndex];
        setConnections(currentItem ? currentItem.connections : []);
        setTitle(currentItem ? currentItem.name : '');
    }, [currentIndex, selectedItemStep1]);

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const getCurrentItemColor = () => {
        const currentItem = items[currentIndex];
        if (currentItem) {
            const colorObj = correctColors.find(item => item.string === currentItem.name);
            return colorObj ? colorObj.color : '#ffffff'; // Default color if not found
        }
        return '#ffffff'; // Default color if no item is selected
    };

    return (
        <div className="interfaces-target">
            <div className='Interfaces-contect-target'>
                <div
                    className='title-Interfaces'
                    id='title1-Interfaces'
                    style={{ backgroundColor: getCurrentItemColor() }}
                >
                    תפקיד המכלול:
                </div>
                <div className='text-interfaces-target'>
                    <ul className="connection-list">
                        {connections.length > 0 ? (
                            connections.map((connection, index) => (
                                <li key={index}>{connection}</li>
                            ))
                        ) : (
                            <li>לא נמצאו פרטים עבור ממשק זה.</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className='btn-div-target'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrev}> הקודם</div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNext}> הבא</div>
            </div>
        </div>
    );
}

export default InterfacesTarget;