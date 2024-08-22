import React, { useState, useRef, useEffect } from 'react';
import './Target.css';
import InterfacesTarget from './InterfacesTarget.js';

function Target() {
    const [title, setTitle] = useState('בחירת מכלול');
    const [titleColor, setTitleColor] = useState('#56c3e8');
    const [selectedItemStep1, setSelectedItemStep1] = useState(null);
    const [selectedItemsStep2, setSelectedItemsStep2] = useState(null); // State to track selected item in Step 2
    const [step, setStep] = useState(1);
    const [step1Color, setStep1Color] = useState('#595959'); // Updated color for step 1 button
    const [step2Color, setStep2Color] = useState('#d9d9d9'); // Updated color for step 2 button
    const [step3Color, setStep3Color] = useState('#d9d9d9'); // Updated color for step 3 button
    const [newComponent, setNewComponent] = useState(false);
    const [introVisible, setIntroVisible] = useState(true); // State to manage visibility of intro section
    const [selectedItemColor, setSelectedItemColor] = useState('#ffffff'); // Default color

    const initialArray = [
        'מרכז שליטה רשותי',
        'אוכלוסייה',
        'חינוך',
        'מידע לציבור',
        'הנדסה ותשתיות',
        'לוגיסטיקה ותפעול',
        'משאבי אנוש ומנהל כללי',
    ];

    const secondArray = [
        'יעד מזון ומים',
        'יעד מחסה הולם',
        'יעד שירותי רפואה',
        'מאפשר כוח אדם',
        'מאפשר אנרגיה',
        'מאפשר מידע לציבור',
    ];

    // Assume these colors correspond to the second array items
    const colors = ['#6fa8dc', '#67d7b2', '#ea9999', '#f9cb9c', '#b4a7d6', '#b7b7b7'];

    const introRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const handleClick = (item) => {
        setSelectedItemStep1(item);
        setTitle(`מכלול ${item}`);
        setTitleColor('#50565c');
        setStep(2);
        setStep1Color('#595959');
        setStep2Color('#595959');
    };

    const handleStepClick = (stepNumber) => {
        if (stepNumber <= step) {
            if (stepNumber === 1) {
                setStep(1);
                setSelectedItemStep1(null);
                setSelectedItemsStep2(null);
                setTitle('בחירת מכלול');
                setTitleColor('#56c3e8');
                setStep1Color('#595959');
                setStep2Color('#d9d9d9');
                setStep3Color('#d9d9d9');
                setNewComponent(false);
            } else if (stepNumber === 2) {
                setStep(2);
                setStep2Color('#595959');
                setStep3Color('#d9d9d9');
                setNewComponent(false);
                if (selectedItemStep1) {
                    setTitle(`מכלול ${selectedItemStep1}`);
                } else {
                    setTitle('בחירת מכלול');
                }
            } else if (stepNumber === 3) {
                setStep(3);
                setStep3Color('#595959');
                setTitle(`ממשק בין ${selectedItemStep1} ו${selectedItemsStep2}`);
            }
        }
    };

    const handleItemClick = (item) => {
        if (step === 2) {
            setSelectedItemsStep2(item);
            const colorIndex = secondArray.indexOf(item);
            if (colorIndex !== -1) {
                setSelectedItemColor(colors[colorIndex]);
            }
            setStep2Color('#595959');
            setStep3Color('#595959');
            if (selectedItemStep1 && item) {
                setTitle(`ממשק בין ${selectedItemStep1} ו${item}`);
            }
            setNewComponent(true);
            setStep(3);
        } else {
            handleClick(item);
        }
    };
    const handleArrowClick = () => {
        setIntroVisible(false);
    };

    const handlePrintTargetClick = () => {
        window.open(`${process.env.PUBLIC_URL}/עזר עוגן איתן - מאפשרים.pdf`, '_blank');
    };

    const navigateToStep1 = () => {
        setStep(1);
        setSelectedItemStep1(null);
        setSelectedItemsStep2(null);
        setTitle('בחירת מכלול');
        setTitleColor('#56c3e8');
        setStep1Color('#595959');
        setStep2Color('#d9d9d9');
        setStep3Color('#d9d9d9');
        setNewComponent(false);
    };

    return (
        <div className="Target">
            {introVisible ? (
                <div className='intro-div-Relations' ref={introRef}>
                    <img
                        src={process.env.PUBLIC_URL + '/icon-des.png'}
                        className="photo-target-intro"
                        alt="Relations"
                    />
                    <div className="title-intro-tar">  יעדים ומאפשרים <br/>לאומיים
                    </div>
                    <div className="sub-intro-tar">
                        לפניך מערכת הצלבה בין המכלולים ותוכנית 'עוגן איתן' לרשות המקומית. כאן ניתן ללמוד על תפקיד המכלול במסגרת המאפשרים והיעדים הלאומיים.
                    </div>
                    <img
                        src={process.env.PUBLIC_URL + '/hpArrow.png'}
                        className="hpArrow-Target"
                        alt="Arrow"
                        onClick={handleArrowClick}
                    />
                </div>
            ) : (
                <div className='Relations-div'>
                    <img
                        src={process.env.PUBLIC_URL + '/icon-des.png'}
                        className="photo-mimshak"
                        alt="Relations"
                    />

                    <div className='all-steps'>
                        <div
                            className='btn-steps'
                            id='step1'
                            style={{ backgroundColor: step1Color }}
                            onClick={() => handleStepClick(1)}
                        >
                            שלב 1
                            <div className='arrow-down-target' id='arrow-down1' style={{ display: step === 1 ? 'block' : 'none' }}></div>
                        </div>
                        <div
                            className={`btn-steps ${step < 2 ? 'disabled' : ''}`}
                            id='step2'
                            style={{ backgroundColor: step2Color }}
                            onClick={() => step >= 1 && handleStepClick(2)}
                        >
                            שלב 2
                            <div className='arrow-down-target' id='arrow-down2' style={{ display: step === 2 ? 'block' : 'none' }}></div>
                        </div>
                        <div
                            className={`btn-steps ${step < 3 ? 'disabled' : ''}`}
                            id='step3'
                            style={{ backgroundColor: step3Color }}
                            onClick={() => step >= 2 && handleStepClick(3)}
                        >
                            שלב 3
                            <div className='arrow-down-target' id='arrow-down3' style={{ display: step === 3 ? 'block' : 'none' }}></div>
                        </div>
                    </div>

                    <div className="title-Target" style={{ color: titleColor }}>
                        {/* {step === 3 ? (
                            <>
                                {`ממשק בין ${selectedItemStep1} ו`}
                                <span style={{ color: selectedItemColor }}>
                                    {selectedItemsStep2}
                                </span>
                            </>
                        ) : (
                            title
                        )} */}
                        {step !== 3 && title}
                    </div>

                    {(step === 2 || step === 3) && <div className='sub-text-relations'>בחרת ב</div>}

                    <div className='content-page1' ref={contentRef}>
                        <div id="text-Target1" style={{ display: step === 1 ? 'block' : 'none' }}>
                            יש לבחור את המכלול הראשי
                        </div>
                        <div id="text-Target2" style={{ display: step === 2 ? 'block' : 'none' }}>
                            יש לבחור יעד או מאפשר לאומי כדי לצפות בתפקידי המכלול
                        </div>


                        <div className='all-option-step1' style={{ display: step === 1 ? 'block' : 'none' }}>
                            {initialArray.map((item, index) => (
                                <div
                                    id={`step1Item${index}`}
                                    key={index}
                                    className="array-item-step1"
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className='all-option-step2' style={{ display: step === 2 ? 'block' : 'none' }}>
                            {secondArray.map((item, index) => {
                                const [firstWord, ...rest] = item.split(' ');
                                return (
                                    <div
                                        id={`step2Item${index}`}
                                        key={index}
                                        className="array-item-step2"
                                        onClick={() => handleItemClick(item)}
                                        style={{ backgroundColor: colors[index] }}
                                    >
                                        <strong>{firstWord}</strong> {rest.join(' ')}
                                    </div>
                                );
                            })}
                            <div className='line-array' >. . . . . . . . . . . . . . . . . . . . . . . </div>
                        </div>

                        <div id='btn-print-target1' onClick={handlePrintTargetClick} style={{ display: step === 3 ? 'none' : 'block', marginTop: step === 1 ? '84vh' : "88vh" }}>
                            <div className='targetPrintDiv'>
                                <img src={process.env.PUBLIC_URL + '/print.png'} className="print-img-gallery" alt="print"></img>
                                <p className='text-print'>הורדת גרסה להדפסה</p>
                            </div>
                        </div>

                        {newComponent && <InterfacesTarget
                            selectedItemStep1={selectedItemStep1}
                            selectedItemsStep2={selectedItemsStep2}
                            navigateToStep1={navigateToStep1} // Pass the callback here
                        />}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Target;
