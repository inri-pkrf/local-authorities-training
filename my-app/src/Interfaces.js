import React, { useEffect } from 'react';
import './Interfaces.css';

function Interfaces({ selectedItemStep1, selectedItemsStep2, setSelectedItemsStep2, setTitle, navigateToStep1 }) {
    const data = {
        "שליטה ודיווח": [
            {
                name: "מידע לציבור",
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות. הנחיות בתחום האבטחה והביטחון לתושבים.",
                    "תמ\"צ פניות התושבים. דיווחי תושבים בתחום הביטחון: מיקום נפילות, נזק לתשתיות ולמבנים, מצב מקלטים, פערי התרעה. מסרים עיקריים ליממה הקרובה."
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות.",
                    "תמונת מצב שירותים חיוניים. תמונת מצב היסעים, תחבורה וצמ\"ה. סטטוס אמצעים למול משימות רשות. מענה לוגיסטי (כוחות חירום, צוותי הרשות, מרה\"פ)."
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות.",
                    "תמ\"צ אוכלוסייה. תמ\"צ מתנדבים ומשאבי קהילה. תמ\"צ קליטה וחללים. תמ\"צ שירותי רפואה ושירותי דת. תמ\"צ צוותי התערבות בשטח. מתן מודיעין אוכלוסייה באירוע."
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות.",
                    "תמ\"צ נזק תשתיות ומבנים ברשות. פעילות לצמצום הסכנות מחומ\"ס ומפגעי סביבה. הקצאת מהנדסים למשימות השונות. תכניות של מבנים שנפגעו."
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות.",
                    "תמ\"צ לימודים, חינוך מיוחד ופעילויות חינוכיות בלתי פורמליות ברשות. מוכנות מוסדות החינוך. המלצות לפעילויות הפגה לילדים. תמ\"צ מסגרות לילדי עובדים."
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות.",
                    "הנחיות לעובדי הרשות. התייצבות כ\"א ומיפוי הסיבות לפערים. תמ\"צ כ\"א למול המשימות ואופן צמצום הפערים. פוטנציאל ילדי עובדים למסגרות. תמיכה במחשוב ובמערכות המידע."
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "תמונת מצב אירועים ברשות. דרישות סיוע אזרחי (דרך המרס\"ל). סיוע לפיקוד העורף.",
                    "תמ\"צ איום, כוחות ומשימות פקע\"ר. מדיניות התגוננות וסטאטוס מימושה. תמ\"צ אוכלוסייה והנחיות פקע\"ר. סטאטוס בקשות סיוע אזרחי. מאמצים מרכזיים והמלצות לרשות."
                ]
            }
        ],
        "מידע לציבור": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות. הנחיות בתחום האבטחה והביטחון לתושבים.",
                    "סטאטוס טיפול בפניות התושבים בתחומי המכלול. הפצת מידע על השירותים הניתנים לתושבים: שירותי בריאות, רווחה ודת."
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "תמונת מצב שירותים חיוניים. תמונת מצב היסעים, תחבורה וצמ\"ה. סטטוס אמצעים למול משימות רשות. מענה לוגיסטי (כוחות חירום, צוותי הרשות, מרה\"פ).",
                    "מידע אודות שינוי פעילות התחבורה הציבורית, אופן אספקת מזון, מים, דלק וכד'. מענה לוגיסטי לפעילות המכלול."
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "תמ\"צ אוכלוסייה - מגמות וצרכים. הפעלת צוות 'קו פתוח' במוקד הטלפוני. מידע אודות קבלת שירותי בריאות, רווחה ודת ומידע מומלץ למפונים ולנפגעים. המלצות למסרים ומידע תומך חוסן. סיוע בכ\"א מתנדבים לפעילות המכלול.",
                    "נתוני פגיעה במתקני מים וביוב ועדכון תוכנית חלוקת המים. נתוני צוותי מס רכוש הפועלים ברשות. מפגעי חשמל פתוחים וסטטוס חזרת החשמל. כבישים ודרכים חסומים וסטאטוס הטיפול בהם. נתוני סביבה - מזהמים באוויר במים ובקרקע."
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "תמ\"צ נזק תשתיות ומבנים ברשות. פעילות לצמצום הסכנות מחומ\"ס ומפגעי סביבה. הקצאת מהנדסים למשימות השונות. תכניות של מבנים שנפגעו.",
                    "סטאטוס טיפול בפניות התושבים בתחומי המכלול. הפצת מידע על אופן פעילות מוסדות החינוך ופעילות החינוך הבלתי פורמלית."
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "תמ\"צ לימודים, חינוך מיוחד ופעילויות חינוכיות בלתי פורמליות ברשות. מוכנות מוסדות החינוך. המלצות לפעילויות הפגה לילדים. תמ\"צ מסגרות לילדי עובדים.",
                    "מידע אודות אופן ומתכונת הפעילות החינוכית. אחוז התייצבות תלמידים במוסדות החינוך. פלטפורמה להעברת מידע להורים דרך הסגל החינוכי."
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    "הנחיות לעובדי הרשות. התייצבות כ\"א ומיפוי הסיבות לפערים. תמ\"צ כ\"א למול המשימות ואופן צמצום הפערים. פוטנציאל ילדי עובדים למסגרות. תמיכה במחשוב ובמערכות המידע.",
                    "נתוני התייצבות כ\"א והסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים למסגרות."
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "תמ\"צ פניות תושבים. תמ\"צ פעילות הסברה ומידע לציבור. תוכנית ההסברה הרשותית המתוכננת. פערי הסברה ומידע מול פקע\"ר.",
                    "מדיניות התגוננות ומשמעותיה לרשות. הנחיות מצילות חיים לפרסום. תמ\"צ צרכי מידע ברשות בפלטפורמות פקע\"ר. תוכניות הסברה לתרחישים השונים. סיוע בגיבוש תוצרי הסברה משותפים."
                ]
            }
        ],

        "לוגיסטיקה": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "תמ“צ שירותים חיוניים. תמונת מצב היסעים, תחבורה וצמ\"ה. סטטוס אמצעים למול משימות רשות. מענה לוגיסטי (כוחות חירום, צוותי הרשות, מרה\"פ).",
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות."
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "מידע אודות פעילות התחבורה הציבורית, אופן אספקת מזון, מים, דלק וכד'. מענה לוגיסטי לפעילות המכלול.",
                    "סטאטוס טיפול בפניות התושבים בתחומי המכלול. הפצת מידע על השירותים הניתנים לתושבים בתחומים: פינוי אשפה, תחבורה ציבורית, מזון, דלק, גז ועוד."
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "סיוע בהקמה ותפעול לוגיסטי שוטף של מרכזי הרשות: אס\"ל, מתקני קליטה ותר\"ח. פיקוח תברואתי במרכזי הרשות. מענה לוגיסטי לפעילות המכלול.",
                    "ניהול האס\"ל/ מתקן הקליטה/ התר\"ח. מתנדבים למשימות השונות. הגדרת מענה לצורכי המפונים. השתתפות בועדת פס\"ח ובקבוצת קליטה."
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "סיוע לוגיסטי ותפעולי לצוותי התשתיות. אספקת ציוד ממחסני החירום לשימוש המכלול. אספקת כלי צמ\"ה למשימות. סיוע בפתיחת צירים.",
                    "תמ“צ נזק מבנים ותשתיות. אספקת ציוד ותמיכה בצוותי המכלול ובשטח. אספקת דלק לכלי צמ\"ה בשטח. אספקת גנרטורים."
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "הסעת תלמידים למסגרות החינוך. תברואה והגנת הסביבה במבני חינוך. מענה לוגיסטי לפעילות המכלול.",
                    "שימוש בבתי ספר לקליטת מפונים. מידע לגבי הפעלת מערכת החינוך ושימוש במתקנים לקליטת אוכלוסייה."
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    "נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים למסגרות. מענה לוגיסטי לפעילות המכלול (מזון, רכב, רכש וכד').",
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע."
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "סיוע לוגיסטי (ציוד, הובלה) לכוחות החילוץ. סיוע בבידוד זירת האירוע במידת הצורך.",
                    "סיוע באמצעים למימוש משימות הרשות (העלאת דרישות דרך המרס\"ל). תיאום וסיוע מקצועי."
                ]
            }
        ],
        "אוכלוסייה": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "תמ\"צ אוכלוסייה. תמ\"צ מתנדבים ומשאבי קהילה. תמ\"צ קליטה וחללים. תמ\"צ שירותי רפואה ושירותי דת. תמ\"צ צוותי התערבות בשטח. מתן מודיעין אוכלוסייה באירוע.",
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות."
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "תמ\"צ אוכלוסייה. הפעלת צוות \"קו פתוח\". מידע אודות שירותי בריאות, רווחה ודת. מידע מומלץ למפונים ולנפגעים. המלצות למסרים ומידע תומך חוסן. סיוע בכ\"א מתנדבים לפעילות המכלול.",
                    "סטאטוס טיפול בפניות התושבים בתחומי המכלול. הפצת מידע על שירותי בריאות, רווחה ודת."
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "ניהול האס\"ל/ מתקן הקליטה/ התר\"ח. סיוע בכ\"א מתנדבים לפעילות המכלול. הגדרת מענה לצורכי המפונים. השתתפות בועדת פס\"ח ובקבוצת קליטה.",
                    "סיוע בהקמה ותפעול לוגיסטי שוטף של מרכזי הרשות: אס\"ל, מתקני קליטה ותר\"ח. פיקוח תברואתי במרכזי הרשות. מענה לוגיסטי לפעילות המכלול."
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "דרישות סיוע לאוכלוסיות מיוחדות. העדפת מתן פתרונות למוסדות חיוניים. סיוע בכ\"א מתנדבים לפעילות המכלול.",
                    "תמונת מצב נזק מבנים ותשתיות לפינוי אוכלוסייה. סטטוס חלוקת מים ברשות. צורך בסיוע ובמתנדבים לאתרים שנפגעו."
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "תמ\"צ אוכלוסייה. סיוע בכ\"א מתנדבים לפעילות המכלול. מענה למתקני הקליטה בביה\"ס מענים קהילתיים לחינוך בלתי פורמלי. כ\"א טיפולי-מקצועי מהשפ\"ח. ניהול הוועדה לארגון ותיאום התנדבות.",
                    "השתתפות נציג חינוך בוועדת פס\"ח. השתתפות נציג חינוך בוועדה לתיאום התנדבות. צוותי חינוך והוראה להפעלת מתקני קליטה. סיוע במתנדבים בני נוער לסיוע במשימות."
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    "תמ\"צ משאבי קהילה ומתנדבים. נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים למסגרות.",
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע. גיוס ורישום מתנדבים. תמונת מצב תיירים ומיפוי צרכים."
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "תמ\"צ אוכלוסייה. תמ\"צ מתנדבים ומשאבי קהילה ודרישת סיוע בכ\"א דרך המרס\"ל. תמ\"צ קליטה וחללים. תמ\"צ שירותי רפואה ודת. מודיעין אוכלוסייה באירוע.",
                    "מגמות התנהגות אוכלוסייה ברשויות סמוכות. מענה לבקשות סיוע כ\"א במרס\"ל וסיוע במורות חיילות על פי דרישה וסדר עדיפויות. גיבוש תמונת מצב מודיעין אוכלוסייה באירוע הרס."
                ]
            }
        ],



        "הנדסה ותשתיות": [
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "תמונת מצב נזק תשתיות ומבנים ברשות. פעילות לצמצום הסכנות מחומ\"ס ומפגעי סביבה. הקצאת מהנדסים למשימות השונות. תכניות של מבנים שנפגעו.",
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות."
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "פגיעה במתקני מים וביוב ותוכנית חלוקת מים. נתוני צוותי מס רכוש ברשות. מפגעי חשמל וסטטוס חזרת החשמל. כבישים ודרכים חסומים והטיפול בהם. מזהמים באוויר במים ובקרקע.",
                    "דיווחי התושבים על נזקים לתשתיות ולמבנים. הפצת עדכונים לאוכלוסייה אודות הטיפול בנזקים ובתחום המים והחשמל."
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "תמונת מצב נזק מבנים ותשתיות. אספקת ציוד ותמיכה בצוותי המכלול ובשטח. אספקת דלק לכלי צמ\"ה בשטח. אספקת גנרטורים.",
                    "סיוע לוגיסטי ותפעולי לצוותי התשתיות. אספקת ציוד ממחסני החירום לשימוש המכלול. אספקת כלי צמ\"ה למשימות. סיוע בפתיחת צירים."
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "תמונת מצב נזק מבנים ותשתיות לפינוי אוכלוסייה. סטטוס חלוקת מים ברשות. צורך בסיוע ובמתנדבים לאתרים שנפגעו.",
                    "דרישות סיוע לאוכלוסיות מיוחדות. העדפת מתן פתרונות למוסדות חיוניים. סיוע בכ\"א מתנדבים לפעילות המכלול."
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "אחזקת מוסדות חינוך. כשירות מבנים ומקלטים במוסדות החינוך. שירותי הגנת הסביבה במוסדות החינוך. שיפוץ ושיקום מוסדות חינוך.",
                    "כשירות מוסדות חינוך לשימוש כמתקני קליטה. סדר עדיפות לשיפוץ ושיקום מוסדות חינוך."
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    "נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים למסגרות.",
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע."
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "תמונת מצב נזק וטיפול במבנים ובתשתיות. מענה מקצועי באירועי הרס - ייעוץ הנדסי, תוכניות מבנה, פתיחת מעברים, חשמל וכד'. סטטוס ומידע על אירועי סביבה פתוחים.",
                    "סיוע באמצעים ובכ\"א מקצועי למשימות. תמונת מצב קיום צווים במפעלי חומ\"ס. סטאטוס ומידע על אירועי חומ\"ס פתוחים."
                ]
            }
        ],

        "חינוך": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "תמונת מצב לימודים, חינוך מיוחד ופעילויות חינוכיות בלתי פורמליות ברשות. מוכנות מוסדות החינוך. המלצות לפעילויות הפגה לילדים. תמונת מצב מסגרות לילדי עובדים.",
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות."
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "מידע אודות אופן ומתכונת הפעילות החינוכית. אחוז התייצבות תלמידים במוסדות החינוך. פלטפורמה להעברת מידע להורים דרך הסגל החינוכי.",
                    "סטאטוס טיפול בפניות התושבים בתחומי המכלול. הפצת מידע על אופן פעילות מוסדות החינוך ופעילות החינוך הבלתי פורמלית."
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "שימוש בבתי ספר לקליטת מפונים. מידע לגבי הפעלת מערכת החינוך ושימוש במתקנים לקליטת אוכלוסייה.",
                    "הסעת תלמידים למסגרות החינוך. תברואה והגנת הסביבה במבני חינוך. מענה לוגיסטי לפעילות המכלול."
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "השתתפות נציג חינוך בוועדת פס\"ח. השתתפות נציג חינוך בוועדה לתיאום התנדבות. צוותי חינוך והוראה להפעלת מתקני קליטה.",
                    "תמ\"צ אוכלוסייה. סיוע בכ\"א מתנדבים לפעילות המכלול. מענה למתקני הקליטה בביה\"ס מענים קהילתיים לחינוך בלתי פורמלי. כ\"א טיפולי-מקצועי מהשפ\"ח. ניהול הוועדה לארגון ותיאום התנדבות."
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "כשירות מוסדות חינוך לשימוש כמתקני קליטה. סדר עדיפות לשיפוץ ושיקום מוסדות חינוך.",
                    "אחזקת מוסדות חינוך. כשירות מבנים ומקלטים במוסדות החינוך. שירותי הגנת הסביבה במוסדות החינוך. שיפוץ ושיקום מוסדות חינוך."
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    "תמונת מצב מתנדבים בני נוער. היערכות לפתיחת מסגרות לילדי עובדים. נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים.",
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע. גיוס ורישום מתנדבים."
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "תוכניות מענה לחינוך בחירום - נתוני פתיחת מוס\"ח, למידה מרחוק. נתוני התייצבות סגל חינוכי ותלמידים. בקשות החרגה למוסדות חינוך ע\"פ דרישה.",
                    "מדיניות התגוננות והנחיות בנוגע לפתיחת מוסדות חינוך וביצוע פעילויות חינוכיות. תשובות לבקשות החרגה ממדיניות ההתגוננות."
                ]
            }
        ],

        'מנהל כללי ומשא"ן': [
            {
                name: "שליטה ודיווח",
                connections: [
                    "הנחיות לעובדי הרשות. התייצבות כ\"א ומיפוי הסיבות לפערים. תמ\"צ כ\"א למול המשימות ואופן צמצום הפערים. פוטנציאל ילדי עובדים למסגרות. תמיכה במחשוב",
                    "תמונת מצב אירועים ברשות. סיכומי הערכות מצב. הנחיות מנהל השולחן המרכזי. הקצאת משאבים למשימות."
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע. נתונים על תיירים ותושבי חוץ.",
                    "תמ\"צ פניות בקשות להתנדבות. פרסום לעידוד התנדבות. מידע והסברה בשפות לתיירים. נתוני התייצבות כ\"א והסיבות לפערים."
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע.",
                    "נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים למסגרות."
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע. גיוס ורישום מתנדבים.",
                    "תמונת מצב משאבי קהילה ומתנדבים. נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול."
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע.",
                    "נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות המכלול. פוטנציאל ילדי עובדים למסגרות."
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "פתרונות לאיוש / תגבור בכ\"א למשימות המכלול. הנחיות לעובדי הרשות. תמיכה במחשוב ובמערכות המידע. גיוס ורישום מתנדבים. פוטנציאל ילדי עובדים בחתך",
                    "תמונת מצב מתנדבים בני נוער. היערכות לפתיחת מסגרות לילדי עובדים. נתוני התייצבות כ\"א ומיפוי הסיבות לפערים. צורכי כ\"א למימוש משימות"
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    "תמונת מצב כ\"א למול צרכי ומשימות הרשות. סיוע במתנדבים לכוחות החילוץ. סיוע בתקשורת מאתרי הפגיעה.",
                    "סיוע בכ\"א למימוש משימות הרשות (העלאת דרישות דרך המרס\"ל). סיוע בתקשורת מאתגרי הפגיעה."
                ]
            }
        ],

        'יקל"ר': [
            {
                name: "שליטה ודיווח",
                connections: [
                    'תמ"צ איום, כוחות ומשימות פקע"ר. מדיניות התגוננות וסטאטוס מימושה. תמ"צ אוכלוסייה והנחיות פקע"ר. סטאטוס בקשות סיוע אזרחי. מאמצים מרכזיים והמלצות לרשות.',
                    'תמונת מצב אירועים ברשות. דרישות סיוע אזרחי (דרך המרס"ל). סיוע לפיקוד העורף.'
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    'מדיניות התגוננות ומשמעותיה לרשות. הנחיות מצילות חיים לפרסום. תמ"צ צרכי מידע ברשות בפלטפורמות פקע"ר. תוכניות הסברה לתרחישים השונים. סיוע בגיבוש תוצרי הסברה משותפים.',
                    'תמ"צ פניות תושבים. תמ"צ פעילות הסברה ומידע לציבור. תוכנית ההסברה הרשותית המתוכננת. פערי הסברה ומידע מול הציבור.'
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    'סיוע באמצעים למימוש משימות הרשות (העלאת דרישות דרך המרס"ל). תיאום וסיוע מקצועי.',
                    'סיוע לוגיסטי (ציוד, הובלה) לכוחות החילוץ. סיוע בבידוד זירת האירוע במידת הצורך.'
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    'מגמות התנהגות אוכלוסייה ברשויות סמוכות. מענה לבקשות סיוע כ"א במרס"ל וסיוע במורות חיילות על פי דרישה וסדר עדיפויות. גיבוש תמונת מצב מודיעין אוכלוסייה.',
                    'תמ"צ אוכלוסייה. תמ"צ מתנדבים ומשאבי קהילה ודרישת סיוע בכ"א דרך המרס"ל. תמ"צ קליטה וחללים. תמ"צ שירותי רפואה ודת.'
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    'סיוע באמצעים ובכ"א מקצועי למשימות. תמונת מצב קיום צווים במפעלי חומ"ס. סטאטוס ומידע על אירועי חומ"ס פתוחים.',
                    'תמונת מצב נזק וטיפול במבנים ובתשתיות. מענה מקצועי באירועי הרס - ייעוץ הנדסי, תוכניות מבנה, פתיחת מעברים, חשמל וכד\'. סטטוס ומידע על אירועי סביבה.'
                ]
            },
            {
                name: "חינוך",
                connections: [
                    'מדיניות התגוננות והנחיות בנוגע לפתיחת מוסדות חינוך וביצוע פעילויות חינוכיות. תשובות לבקשות החרגה ממדיניות ההתגוננות.',
                    'תוכניות מענה לחינוך בחירום - נתוני פתיחת מוס"ח, למידה מרחוק. נתוני התייצבות סגל חינוכי ותלמידים. בקשות החרגה למוסדות חינוך.'
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'סיוע בכ"א למימוש משימות הרשות (העלאת דרישות דרך המרס"ל). סיוע בתקשורת מאתגרי הפגיעה.',
                    'תמונת מצב כ"א למול צרכי ומשימות הרשות. סיוע במתנדבים לכוחות החילוץ. סיוע בתקשורת מאתרי הפגיעה.'
                ]
            }
        ]
    };


    const selectedData = data[selectedItemStep1] || [];
    const currentIndex = selectedData.findIndex(item => item.name === selectedItemsStep2);
    const itemData = selectedData[currentIndex];

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const handleNext = () => {
        if (selectedData.length > 0) {
            const nextIndex = (currentIndex + 1) % selectedData.length;
            const nextItem = selectedData[nextIndex].name;
            setSelectedItemsStep2(nextItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${nextItem}`);
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (selectedData.length > 0) {
            const prevIndex = (currentIndex - 1 + selectedData.length) % selectedData.length;
            const prevItem = selectedData[prevIndex].name;
            setSelectedItemsStep2(prevItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${prevItem}`);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="Interfaces">
            <div className='sub-Interfaces'>הממשקים בין המכלולים</div>

            <div className='Interfaces-contect'>
                <div className='title-Interfaces' id='title1-Interfaces'>מקבל מהמכלול</div>
                <div className='text-Interfaces' id='text1-Interfaces'>
                    {itemData ? itemData.connections[1] : ''}
                </div>

                <div className='title-Interfaces' id='title2-Interfaces'>נותן למכלול</div>
                <div className='text-Interfaces' id='text2-Interfaces'>
                    {itemData ? itemData.connections[0] : ''}
                </div>
            </div>

            <div className='btn-div'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrev}>לממשק הקודם</div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNext}>לממשק הבא</div>
            </div>

            <div className='Interfaces-back'>
                <div id='stpe1btn-Interfaces' onClick={navigateToStep1}>
                    חזרה לבחירת מכלול ראשון
                </div>
            </div>

        </div>
    );
}

export default Interfaces;