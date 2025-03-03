import React, { useState, useRef, useEffect } from 'react';
import './Relations.css';
import Interfaces from './Interfaces.js';

function Relations() {
  const [title, setTitle] = useState('בחירת מכלול');
  const [titleColor, setTitleColor] = useState('#50565c');
  const [text, setText] = useState('יש לבחור את המכלול הראשי');
  const [selectedItemStep1, setSelectedItemStep1] = useState(null);
  const [selectedItemsStep2, setSelectedItemsStep2] = useState(null); // State to track selected item in Step 2
  const [step, setStep] = useState(1);
  const [step1Color, setStep1Color] = useState('rgb(86 195 232)'); // Initial color for step 1 button
  const [step2Color, setStep2Color] = useState('rgb(217 217 217)'); // Initial color for step 2 button
  const [step3Color, setStep3Color] = useState('rgb(217 217 217)'); // Initial color for step 3 button
  const [newComponent, setNewComponent] = useState(false);
  const [introVisible, setIntroVisible] = useState(true); // State to manage visibility of intro section

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

  const introRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when step changes
    window.scrollTo(0, 0);
  }, [step]);

  const handleClick = (item) => {
    setSelectedItemStep1(item);
    setTitle(`מכלול ${item}`);
    setTitleColor('#56c3e8');
    setText('יש לבחור מכלול נוסף, בכדי לצפות בממשקים שלו כחלק מהעבודה השוטפת ');
    setStep(2);
    setArrayOfMechlol(arrayOfMechlol.filter(mechlol => mechlol !== item));
    setStep1Color('rgb(86 195 232)');
    setStep2Color('rgb(86 195 232)'); // Change color of Step 2 button
  };

  const handleStepClick = (stepNumber) => {
    if (stepNumber <= step) {
      if (stepNumber === 1) {
        setStep(1);
        setSelectedItemStep1(null);
        setSelectedItemsStep2(null); // Clear selected item for Step 2
        setTitle('בחירת מכלול');
        setTitleColor('#50565c');
        setText('יש לבחור את המכלול הראשי');
        setArrayOfMechlol(initialArray);
        setStep1Color('rgb(86 195 232)'); // Reset color for Step 1
        setStep2Color('rgb(217 217 217)'); // Reset color for Step 2
        setStep3Color('rgb(217 217 217)'); // Reset color for Step 3
        setNewComponent(false); // Hide the Interfaces component
      } else if (stepNumber === 2) {
        setStep(2);
        setStep2Color('rgb(86 195 232)'); // Highlight Step 2 button
        setStep3Color('rgb(217 217 217)');
        setNewComponent(false); // Ensure Interfaces is hidden
        setText('יש לבחור את המכלול הראשי'); // Reset text for Step 2
        if (selectedItemStep1) {
          setTitle(`מכלול ${selectedItemStep1}`);
        } else {
          setTitle('בחירת מכלול');
        }
      } else if (stepNumber === 3) {
        setStep(3);
        setStep3Color('rgb(86 195 232)'); // Highlight Step 3 button
        // if (selectedItemStep1 === 'יקל"ר') {
        //   setTitle(`ממשק בין ${selectedItemStep1} ו${selectedItemsStep2}`);
        //   setTitleColor('#f90');
        // } else {
        //   setTitle(`ממשק בין ${selectedItemStep1} ו${selectedItemsStep2}`);
        //   setTitleColor('#56c3e8');
        // }
      }
    }
  };

  const handleItemClick = (item) => {
    if (step === 2) {
      setSelectedItemsStep2(item);
      setStep2Color('rgb(86 195 232)');
      setStep3Color('rgb(86 195 232)');
      if (selectedItemStep1 === 'יקל"ר') {
        setTitle(
          <span>
            ממשק בין <span style={{ color: '#f90' }}>{selectedItemStep1}</span> ו{item}
          </span>
        );
      } else {
        setTitle(
          <span>
            ממשק בין {selectedItemStep1} ו{item}
          </span>
        );
      }
      // if (selectedItemStep1 && item) {
      //   setTitle(`ממשק בין ${selectedItemStep1} ו${item}`);
      // }
      setNewComponent(true);
      setStep(3);
    } else {
      handleClick(item);
    }
  };

  // Function to toggle visibility of intro and main content
  const handleArrowClick = () => {
    setIntroVisible(false);
  };

  const handlePrintRelationsClick = () => {
    window.open(`${process.env.PUBLIC_URL}/ממשקים בין מכלולים.pdf`, '_blank');
  };

  const navigateToStep1 = () => {
    setStep(1);
    setSelectedItemStep1(null);
    setSelectedItemsStep2(null); // Clear selected item for Step 2
    setTitle('בחירת מכלול');
    setTitleColor('#50565c');
    setText('יש לבחור את המכלול הראשי');
    setArrayOfMechlol(initialArray);
    setStep1Color('rgb(86 195 232)'); // Reset color for Step 1
    setStep2Color('rgb(217 217 217)'); // Reset color for Step 2
    setStep3Color('rgb(217 217 217)'); // Reset color for Step 3
    setNewComponent(false); // Hide the Interfaces component
  };

  return (
    <div className="Relations">
      {introVisible ? (
        <div className='intro-div-Relations' ref={introRef}>
          <img
            src={process.env.PUBLIC_URL + '/mimshak.png'}
            className="photo-mimshak-intro"
            alt="Relations"
          />
          <div className="title-intro-rel">ממשקים בין מכלולים
          </div>
          <div className="sub-intro-rel">
            לפניך מערכת הצלבה בין המכלולים. <br />כאן ניתן ללמוד על תפקיד המכלול שלי, מה מכלולים אחרים צריכים לקבל ממני ומה אני מהם
          </div>
          <img
            src={process.env.PUBLIC_URL + '/hpArrow.png'}
            className="hpArrow-Relations"
            alt="Arrow"
            onClick={handleArrowClick}
          />
        </div>
      ) : (
        <div className='Relations-div'>
          <img
            src={process.env.PUBLIC_URL + '/mimshak.png'}
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
              <div className='arrow-down' id='arrow-down1' style={{ display: step === 1 ? 'block' : 'none' }}></div>
            </div>
            <div
              className={`btn-steps ${step < 2 ? 'disabled' : ''}`} // Add disabled class if step < 2
              id='step2'
              style={{ backgroundColor: step2Color }}
              onClick={() => step >= 1 && handleStepClick(2)} // Prevent clicking if not in step 1 or higher
            >
              שלב 2
              <div className='arrow-down' id='arrow-down2' style={{ display: step === 2 ? 'block' : 'none' }}></div>
            </div>
            <div
              className={`btn-steps ${step < 3 ? 'disabled' : ''}`} // Add disabled class if step < 3
              id='step3'
              style={{ backgroundColor: step3Color }}
              onClick={() => step >= 2 && handleStepClick(3)} // Prevent clicking if not in step 2 or higher
            >
              שלב 3
              <div className='arrow-down' id='arrow-down3' style={{ display: step === 3 ? 'block' : 'none' }}></div>
            </div>
          </div>

          <div className="title-page1" style={{ color: titleColor }}>
            {title}
          </div>

          {(step === 2 || step === 3) && <div className='sub-text-relations'>בחרת ב</div>}

          <div className='content-page1' ref={contentRef}>
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

            <div id='btn-print-relations1' onClick={handlePrintRelationsClick} style={{ display: step === 3 ? 'none' : 'block', marginTop: step === 1 ? '99vh' : "89vh" }}>
              <div className='relationsPrintDiv'>
                <img src={process.env.PUBLIC_URL + '/print.png'} className="print-img-gallery" alt="print"></img>
                <p className='text-print'>הורדת גרסה להדפסה</p>
              </div>
            </div>

            {newComponent && <Interfaces
              selectedItemStep1={selectedItemStep1}
              selectedItemsStep2={selectedItemsStep2}
              setSelectedItemsStep2={setSelectedItemsStep2}
              setTitle={setTitle}
              navigateToStep1={navigateToStep1}
            />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Relations;