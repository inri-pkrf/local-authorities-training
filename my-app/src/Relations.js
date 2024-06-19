import React, { useState } from 'react';
import './Relations.css';
import BoxDetail from './BoxDetail';
import CombinedDetail from './CombinedDetail';

const boxData = [
  { id: 1, title: 'שליטה ודיווח', color: '#fcb0b0', text: 'Definition for שליטה ודיווח' },
  { id: 2, title: 'מידע לציבור', color: '#fddbb0', text: 'Definition for מידע לציבור' },
  { id: 3, title: 'לוגיסטיקה', color: '#fbf3a7', text: 'Definition for לוגיסטיקה' },
  { id: 4, title: 'אוכלוסייה', color: '#d8f8b0', text: 'Definition for אוכלוסייה' },
  { id: 5, title: 'הנדסה ותשתיות', color: '#b0f8d8', text: 'Definition for הנדסה ותשתיות' },
  { id: 6, title: 'חינוך', color: '#b0e7f8', text: 'Definition for חינוך' },
  { id: 7, title: 'מהל כללי ומשא״ן', color: '#d1b0f8', text: 'Definition for מהל כללי ומשא״ן' },
  { id: 8, title: 'יקל״ר', color: '#f8b0e4', text: 'Definition for יקל״ר' },
];

const combinedData = [
  { id1: 1, id2: 2, text: 'Combined info for שליטה ודיווח and מידע לציבור' },
  // Add more combined data entries for each pair of boxes
];

function Relations({ onNavigate }) {
  const [selectedBox, setSelectedBox] = useState(null); // Track selected box ID
  const [step, setStep] = useState(1); // Track step of interaction

  // Handle box selection
  const handleBoxSelect = (id) => {
    if (step === 1) {
      setSelectedBox(id);
      setStep(2); // Move to step 2 when a box is selected
    } else if (step === 2) {
      if (id !== selectedBox) {
        setSelectedBox(id); // Update selected box
      }
    }
  };

  // Handle forward button click
  const handleForwardClick = () => {
    setStep(1); // Reset to step 1
    setSelectedBox(null); // Clear selected box
  };

  // Get box style based on selection state
  const getBoxStyle = (id, color) => {
    if (step === 1 && id === selectedBox) {
      return { backgroundColor: 'grey', color: color, cursor: 'default' };
    } else if (step === 2 && id !== selectedBox) {
      return { backgroundColor: 'grey', color: color, cursor: 'default' };
    }
    return { backgroundColor: color, color: 'white', cursor: 'pointer' };
  };

  return (
    <div className="relations-container">
      <div className="relations-title">
        {step === 1 && 'יחסי מכלולים'}
        {step === 2 && selectedBox !== null && boxData.find(box => box.id === selectedBox).title}
      </div>
      <div className="relations-subtitle">
        כאן תוכלו למצוא את כל המידע הנוגע ליחסי המכלולים ולהבין כיצד הם משתלבים בעבודת הרשות המקומית בשעת חירום.
      </div>

      {/* Display individual boxes */}
      {step === 1 && (
        <div className="boxes-container">
          {boxData.map((box) => (
            <div
              key={box.id}
              className="colored-box"
              style={{ backgroundColor: getBoxStyle(box.id, box.color).backgroundColor, cursor: getBoxStyle(box.id, box.color).cursor }}
              onClick={() => handleBoxSelect(box.id)}
            >
              {box.title}
            </div>
          ))}
        </div>
      )}

      {/* Display BoxDetail when a single box is selected */}
      {step === 2 && selectedBox !== null && (
        <div className="details-container">
          <BoxDetail box={boxData.find((box) => box.id === selectedBox)} />
          <div className="forward-button-container">
            <button
              className="forward-button"
              onClick={handleForwardClick}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Display CombinedDetail when two boxes are selected */}
      {step === 2 && selectedBox !== null && (
        <div className="combined-details">
          {boxData
            .filter((box) => box.id !== selectedBox)
            .map((otherBox) => (
              <CombinedDetail
                key={`${selectedBox}-${otherBox.id}`}
                box1={boxData.find((box) => box.id === selectedBox)}
                box2={otherBox}
              />
            ))}
          <div className="forward-button-container">
            <button
              className="forward-button"
              onClick={handleForwardClick}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Relations;
