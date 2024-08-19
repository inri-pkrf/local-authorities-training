import React, { useEffect, useState } from 'react';
import './InterfacesTarget.css';

function InterfacesTarget({ selectedItemStep1, selectedItemsStep2, navigateToStep1  }) {
    const [currentColor, setCurrentColor] = useState(''); // To show the correcr colore that mach the selectedItemsStep2
    const [connections, setConnections] = useState([]); // To get the correct datat according to the selectedItemStep1 
    const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current item index


    const data = {
        "מרכז שליטה רשותי": [
            {
                name: "יעד מזון ומים",
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
                name: "יעד מזון ומים",
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
                name: "יעד מזון ומים",
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
                name: "יעד מזון ומים",
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
                name: "יעד מזון ומים",
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
                name: "יעד מזון ומים",
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
        'משאבי אנוש ומנהל כללי': [
            {
                name: "יעד מזון ומים",
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

    const correctColors = [
        { string: "יעד מזון ומים", color: "#6fa8dc" },
        { string: "יעד מחסה הולם", color: "#67d7b2" },
        { string: "יעד שירותי רפואה", color: "#ea9999" },
        { string: "מאפשר כוח אדם", color: "#f9cb9c" },
        { string: "מאפשר אנרגיה", color: "#b4a7d6" },
        { string: "מאפשר מידע לציבור", color: "#b7b7b7" },
    ];

    useEffect(() => {
        if (data[selectedItemStep1] && selectedItemsStep2) {
            const index = data[selectedItemStep1].findIndex(item => item.name === selectedItemsStep2);
            setCurrentIndex(index >= 0 ? index : 0);
        }
    }, [selectedItemStep1, selectedItemsStep2]);

    useEffect(() => {
        getConnections();
        getCurrentItemColor();
    }, [currentIndex, selectedItemStep1]);

    const getCurrentItemColor = () => {
        const item = data[selectedItemStep1][currentIndex];
        if (item) {
            const match = correctColors.find(colorItem => colorItem.string === item.name);
            if (match) {
                setCurrentColor(match.color);
            } else {
                setCurrentColor('');
            }
        }
    };

    const getConnections = () => {
        const item = data[selectedItemStep1][currentIndex];
        if (item) {
            setConnections(item.connections);
        }
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
        window.scrollTo(0, 0);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, data[selectedItemStep1].length - 1));
        window.scrollTo(0, 0);
    };

    return (
        <div className="interfaces-target">
            <div className='Interfaces-contect-target'>
                <div className='title-Interfaces'>
                    {`ממשק בין ${selectedItemStep1} ו`}
                    <span style={{ color: currentColor }}>
                        {data[selectedItemStep1][currentIndex]?.name || selectedItemsStep2}
                    </span>
                </div>
                <div
                    className='suTtitle-Interfaces'
                    id='title1-Interfaces'
                    style={{ backgroundColor: currentColor }}
                >
                    תפקיד המכלול:
                </div>
                <div className='text-interfaces-target'>
                    <ul className="connection-list">
                        {connections.map((connection, index) => (
                            <li key={index}>{connection}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='btn-div-target'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrevClick}>
                    הקודם
                </div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNextClick}>
                    הבא
                </div>
            </div>

            <div className='btnBackToStep1'>
                <div id='stpe1btn' onClick={navigateToStep1}>
                חזרה לבחירת מכלול
                </div>
            </div>
        </div>
    );
}

export default InterfacesTarget;