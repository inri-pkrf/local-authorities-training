import React from 'react';
import './Interfaces.css';

function Interfaces({ selectedItemStep1, selectedItemsStep2, setSelectedItemsStep2, setTitle  }) {
    const data = {
        "שליטה ודיווח": [
            {
                name: "מידע לציבור",
                connections: [
                    "נותן: שליטה ודיווח - מידע לציבור",
                    "מקבל: מידע לציבור - שליטה ודיווח"
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "נותן: שליטה ודיווח - לוגיסטיקה",
                    "מקבל: לוגיסטיקה - שליטה ודיווח"
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "נותן: שליטה ודיווח - אוכלוסייה",
                    "מקבל: אוכלוסייה - שליטה ודיווח"
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "נותן: שליטה ודיווח - הנדסה ותשתיות",
                    "מקבל: הנדסה ותשתיות - שליטה ודיווח"
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "נותן: שליטה ודיווח - חינוך",
                    "מקבל: חינוך - שליטה ודיווח"
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: שליטה ודיווח - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - שליטה ודיווח'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: שליטה ודיווח - יקל"ר',
                    'מקבל: יקל"ר - שליטה ודיווח'
                ]
            }
        ],

        "מידע לציבור": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "נותן: מידע לציבור - שליטה ודיווח",
                    "מקבל: שליטה ודיווח - מידע לציבור"
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "נותן: מידע לציבור - לוגיסטיקה",
                    "מקבל: לוגיסטיקה - מידע לציבור"
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "נותן: מידע לציבור - אוכלוסייה",
                    "מקבל: אוכלוסייה - מידע לציבור"
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "נותן: מידע לציבור - הנדסה ותשתיות",
                    "מקבל: הנדסה ותשתיות - מידע לציבור"
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "נותן: מידע לציבור - חינוך",
                    "מקבל: חינוך - מידע לציבור"
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: מידע לציבור - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - מידע לציבור'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: מידע לציבור - יקל"ר',
                    'מקבל: יקל"ר - מידע לציבור'
                ]
            }
        ],

        "לוגיסטיקה": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "נותן: לוגיסטיקה - שליטה ודיווח",
                    "מקבל: שליטה ודיווח - לוגיסטיקה"
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "נותן: לוגיסטיקה - מידע לציבור",
                    "מקבל: מידע לציבור - לוגיסטיקה"
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "נותן: לוגיסטיקה - אוכלוסייה",
                    "מקבל: אוכלוסייה - לוגיסטיקה"
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "נותן: לוגיסטיקה - הנדסה ותשתיות",
                    "מקבל: הנדסה ותשתיות - לוגיסטיקה"
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "נותן: לוגיסטיקה - חינוך",
                    "מקבל: חינוך - לוגיסטיקה"
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: לוגיסטיקה - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - לוגיסטיקה'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: לוגיסטיקה - יקל"ר',
                    'מקבל: יקל"ר - לוגיסטיקה'
                ]
            }
        ],

        "אוכלוסייה": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "נותן: אוכלוסייה - שליטה ודיווח",
                    "מקבל: שליטה ודיווח - אוכלוסייה"
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "נותן: אוכלוסייה - מידע לציבור",
                    "מקבל: מידע לציבור - אוכלוסייה"
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "נותן: אוכלוסייה - לוגיסטיקה",
                    "מקבל: לוגיסטיקה - אוכלוסייה"
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "נותן: אוכלוסייה - הנדסה ותשתיות",
                    "מקבל: הנדסה ותשתיות - אוכלוסייה"
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "נותן: אוכלוסייה - חינוך",
                    "מקבל: חינוך - אוכלוסייה"
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: אוכלוסייה - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - אוכלוסייה'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: אוכלוסייה - יקל"ר',
                    'מקבל: יקל"ר - אוכלוסייה'
                ]
            }
        ],

        "הנדסה ותשתיות": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "נותן: הנדסה ותשתיות - שליטה ודיווח",
                    "מקבל: שליטה ודיווח - הנדסה ותשתיות"
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "נותן: הנדסה ותשתיות - מידע לציבור",
                    "מקבל: מידע לציבור - הנדסה ותשתיות"
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "נותן: הנדסה ותשתיות - לוגיסטיקה",
                    "מקבל: לוגיסטיקה - הנדסה ותשתיות"
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "נותן: הנדסה ותשתיות - אוכלוסייה",
                    "מקבל: אוכלוסייה - הנדסה ותשתיות"
                ]
            },
            {
                name: "חינוך",
                connections: [
                    "נותן: הנדסה ותשתיות - חינוך",
                    "מקבל: חינוך - הנדסה ותשתיות"
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: הנדסה ותשתיות - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - הנדסה ותשתיות'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: הנדסה ותשתיות - יקל"ר',
                    'מקבל: יקל"ר - הנדסה ותשתיות'
                ]
            }
        ],

        "חינוך": [
            {
                name: "שליטה ודיווח",
                connections: [
                    "נותן: חינוך - שליטה ודיווח",
                    "מקבל: שליטה ודיווח - חינוך"
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    "נותן: חינוך - מידע לציבור",
                    "מקבל: מידע לציבור - חינוך"
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    "נותן: חינוך - לוגיסטיקה",
                    "מקבל: לוגיסטיקה - חינוך"
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    "נותן: חינוך - אוכלוסייה",
                    "מקבל: אוכלוסייה - חינוך"
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    "נותן: חינוך - הנדסה ותשתיות",
                    "מקבל: הנדסה ותשתיות - חינוך"
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: חינוך - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - חינוך'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: חינוך - יקל"ר',
                    'מקבל: יקל"ר - חינוך'
                ]
            }
        ],

        'מנהל כללי ומשא"ן': [
            {
                name: "שליטה ודיווח",
                connections: [
                    'נותן: מנהל כללי ומשא"ן - שליטה ודיווח',
                    'מקבל: שליטה ודיווח - מנהל כללי ומשא"ן'
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    'נותן: מנהל כללי ומשא"ן - מידע לציבור',
                    'מקבל: מידע לציבור - מנהל כללי ומשא"ן'
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    'נותן: מנהל כללי ומשא"ן - לוגיסטיקה',
                    'מקבל: לוגיסטיקה - מנהל כללי ומשא"ן'
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    'נותן: מנהל כללי ומשא"ן - אוכלוסייה',
                    'מקבל: אוכלוסייה - מנהל כללי ומשא"ן'
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    'נותן: מנהל כללי ומשא"ן - הנדסה ותשתיות',
                    'מקבל: הנדסה ותשתיות - מנהל כללי ומשא"ן'
                ]
            },
            {
                name: "חינוך",
                connections: [
                    'נותן: מנהל כללי ומשא"ן - חינוך',
                    'מקבל: חינוך - מנהל כללי ומשא"ן'
                ]
            },
            {
                name: 'יקל"ר',
                connections: [
                    'נותן: מנהל כללי ומשא"ן - יקל"ר',
                    'מקבל: יקל"ר - מנהל כללי ומשא"ן'
                ]
            }
        ],

        'יקל"ר': [
            {
                name: "שליטה ודיווח",
                connections: [
                    'נותן: יקל"ר - שליטה ודיווח',
                    'מקבל: שליטה ודיווח - יקל"ר'
                ]
            },
            {
                name: "מידע לציבור",
                connections: [
                    'נותן: יקל"ר - מידע לציבור',
                    'מקבל: מידע לציבור - יקל"ר'
                ]
            },
            {
                name: "לוגיסטיקה",
                connections: [
                    'נותן: יקל"ר - לוגיסטיקה',
                    'מקבל: לוגיסטיקה - יקל"ר'
                ]
            },
            {
                name: "אוכלוסייה",
                connections: [
                    'נותן: יקל"ר - אוכלוסייה',
                    'מקבל: אוכלוסייה - יקל"ר'
                ]
            },
            {
                name: "הנדסה ותשתיות",
                connections: [
                    'נותן: יקל"ר - הנדסה ותשתיות',
                    'מקבל: הנדסה ותשתיות - יקל"ר'
                ]
            },
            {
                name: "חינוך",
                connections: [
                    'נותן: יקל"ר - חינוך',
                    'מקבל: חינוך - יקל"ר'
                ]
            },
            {
                name: 'מנהל כללי ומשא"ן',
                connections: [
                    'נותן: יקל"ר - מנהל כללי ומשא"ן',
                    'מקבל: מנהל כללי ומשא"ן - יקל"ר'
                ]
            }
        ]
    };


    // Find the selected data
    const selectedData = data[selectedItemStep1] || [];
    const currentIndex = selectedData.findIndex(item => item.name === selectedItemsStep2);
    const itemData = selectedData[currentIndex];

    const handleNext = () => {
        if (selectedData.length > 0) {
            const nextIndex = (currentIndex + 1) % selectedData.length;
            const nextItem = selectedData[nextIndex].name;
            setSelectedItemsStep2(nextItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${nextItem}`);        }
    };

    const handlePrev = () => {
        if (selectedData.length > 0) {
            const prevIndex = (currentIndex - 1 + selectedData.length) % selectedData.length;
            const prevItem = selectedData[prevIndex].name;
            setSelectedItemsStep2(prevItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${prevItem}`);
        }
    };

    return (
        <div className="Interfaces">
            <div className='sub-Interfaces'>casbdnvjklmfvbvfdnk</div>

            <div className='Interfaces-contect'>
                <div className='title-Interfaces' id='title1-Interfaces'>מקבל מהמכלול</div>
                <div className='text-Interfaces' id='text1-Interfaces'>
                    {itemData ? itemData.connections[1] : ''}
                </div>

                <div className='title-Interfaces' id='title2-Interfaces'>נותן מהמכלול</div>
                <div className='text-Interfaces' id='text2-Interfaces'>
                    {itemData ? itemData.connections[0] : ''}
                </div>
            </div>

            <div className='btn-div'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrev}>לממשק הקודם</div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNext}>לממשק הבא</div>
            </div>
        </div>
    );
}

export default Interfaces;