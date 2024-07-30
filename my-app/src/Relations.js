import React, { useState } from 'react';
import './Relations.css';
import Interfaces from './Interfaces.js'; 

function Relations() {
    const [title, setTitle] = useState('בחירת מכלול');
    const [titleColor, setTitleColor] = useState('#50565c');
    const [text, setText] = useState('יש לבחור מכלול בכדי ללמוד על כל המטלות והממשקים -');
    const [selectedItemStep1, setSelectedItemStep1] = useState(null);
    const [selectedItemsStep2, setSelectedItemsStep2] = useState(null); // State to track selected item in Step 2
    const [step, setStep] = useState(1);
    const [step1Color, setStep1Color] = useState('rgb(145 85 35)'); // Initial color for step 1 button
    const [step2Color, setStep2Color] = useState('#f2903f'); // Initial color for step 2 button
    const [step3Color, setStep3Color] = useState('#f2903f'); // Initial color for step 3 button
    const [newComponent, setNewComponent] = useState(false);

    const initialArray = [
        'שליטה ודיווח',
        'מידע לציבור',
        'לוגיסטיקה',
        'אוכלוסייה',
        'הנדסה ותשתיות',
        'חינוך',
        'מנהל כללי ומשא"ן',
        'יקל"ר'
    ];

    const [arrayOfMechlol, setArrayOfMechlol] = useState(initialArray);

    const handleClick = (item) => {
        setSelectedItemStep1(item);
        console.log("Selected Item Step 1:", item); // Log the item clicked
        setTitle(`מכלול ${item}`);
        setTitleColor('#56c3e8');
        setText('יש לבחור מכלול נוסף בכדי לצפות בממשקים בין עבודות המכלולים');
        setStep(2);
        setArrayOfMechlol(arrayOfMechlol.filter(mechlol => mechlol !== item));
        setStep1Color('rgb(145 85 35)');
        setStep2Color('rgb(145 85 35)'); // Change color of Step 2 button
    };

    const handleStepClick = (stepNumber) => {
        if (stepNumber === 1) {
            setStep(1);
            setSelectedItemStep1(null);
            setSelectedItemsStep2(null); // Clear selected item for Step 2
            setTitle('בחירת מכלול');
            setTitleColor('#50565c');
            setText('יש לבחור מכלול בכדי ללמוד על כל המטלות והממשקים -');
            setArrayOfMechlol(initialArray);
            setStep1Color('rgb(145 85 35)'); // Reset color for Step 1
            setStep2Color('#f2903f'); // Reset color for Step 2
            setStep3Color('#f2903f'); // Reset color for Step 3
            setNewComponent(false); // Hide the Interfaces component
        } else if (stepNumber === 2 && step === 1) { // Check if in Step 1
            console.log("Complete Step 1 before proceeding to Step 2");
        } else if (stepNumber === 2) {
            setStep(2);
            setStep2Color('rgb(145 85 35)'); // Highlight Step 2 button
            setStep3Color('#f2903f');
            setNewComponent(false); // Ensure Interfaces is hidden
            setText('יש לבחור מכלול בכדי ללמוד על כל המטלות והממשקים -'); // Reset text for Step 2
            // Update title to reflect selected item in Step 1
            if (selectedItemStep1) {
                setTitle(`מכלול ${selectedItemStep1}`);
            } else {
                setTitle('בחירת מכלול');
            }
        } else if (stepNumber === 3) {
            setStep(3);
            setStep3Color('rgb(145 85 35)'); // Highlight Step 3 button
            setTitle(`ממשק בין ${selectedItemStep1} ו${selectedItemsStep2}`); // Update title for Step 3
        }
    };

    const handleItemClick = (item) => {
        if (step === 2) {
            // Save the item for Step 2
            setSelectedItemsStep2(item);
            setStep2Color('rgb(145 85 35)');
            setStep3Color('rgb(145 85 35)');
            console.log("Selected Item Step 2:", item); // Log the item clicked in Step 2
            // Update title to include both selected items
            if (selectedItemStep1 && item) {
                setTitle(`ממשק בין ${selectedItemStep1} ו${item}`);
            }
            setNewComponent(true);
            setStep(3);
        } else {
            handleClick(item);
        }
    };

    return (
        <div className="Relations">
            <div className='all-steps'>
                <div
                    className='btn-steps'
                    id='step1'
                    style={{ backgroundColor: step1Color }}
                    onClick={() => handleStepClick(1)}
                >
                    שלב 1
                </div>
                <div
                    className={`btn-steps ${step !== 1 ? '' : 'disabled'}`} // Fixed className
                    id='step2'
                    style={{ backgroundColor: step2Color }}
                    onClick={() => step !== 1 && handleStepClick(2)} // Prevent clicking if not in step 1
                >
                    שלב 2
                </div>
                <div
                    className='btn-steps'
                    id='step3'
                    style={{ backgroundColor: step3Color }}
                    onClick={() => handleStepClick(3)}
                >
                    שלב 3
                </div>
            </div>

            <div className="title-page1" style={{ color: titleColor }}>
                {title}
            </div>

            <div className='content-page1'>
                <div className="text-page1" style={{ display: newComponent ? 'none' : 'block' }}>
                    {text}
                </div>

                <div className='all-opotion' style={{ display: newComponent ? 'none' : 'block' }}>
                    {arrayOfMechlol.map((item, index) => (
                        <div
                            key={index}
                            className="array-item"
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {newComponent && <Interfaces
                    selectedItemStep1={selectedItemStep1}
                    selectedItemsStep2={selectedItemsStep2}
                    setSelectedItemsStep2={setSelectedItemsStep2}
                    setTitle={setTitle}
                />}
            </div>
        </div>
    );
}

export default Relations;