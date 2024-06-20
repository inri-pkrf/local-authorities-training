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
  const [selectedBoxes, setSelectedBoxes] = useState([]); // Track selected box IDs
  const [step, setStep] = useState(1); // Track step of interaction

  // Handle box selection
  const handleBoxSelect = (id) => {
    if (step === 1) {
      setSelectedBoxes([id]);
      setStep(2); // Move to step 2 when a box is selected
    } else if (step === 2) {
      if (!selectedBoxes.includes(id)) {
        setSelectedBoxes([...selectedBoxes, id]); // Add second box to the selection
        setStep(3); // Move to step 3 when the second box is selected
      }
    }
  };

  // Handle forward button click
  const handleForwardClick = () => {
    setStep(1); // Reset to step 1
    setSelectedBoxes([]); // Clear selected boxes
  };

  // Get box style based on selection state
  const getBoxStyle = (id, color) => {
    if (selectedBoxes.includes(id)) {
      return { backgroundColor: 'grey', color: color, cursor: 'default' };
    }
    return { backgroundColor: color, color: 'white', cursor: 'pointer' };
  };

  return (
    <div className="relations-container">
      <div className="relations-title">יחסי מכלולים</div>
      <div className="relations-subtitle">
        כאן תוכלו למצוא את כל המידע הנוגע ליחסי המכלולים ולהבין כיצד הם משתלבים בעבודת הרשות המקומית בשעת חירום.
      </div>

      {/* Display individual boxes in step 1 */}
      {step === 1 && (
        <div className="boxes-container">
          {boxData.map((box) => (
            <div
              key={box.id}
              className="colored-box"
              style={getBoxStyle(box.id, box.color)}
              onClick={() => handleBoxSelect(box.id)}
            >
              {box.title}
            </div>
          ))}
        </div>
      )}

      {/* Display BoxDetail in step 2 */}
      {step === 2 && selectedBoxes.length === 1 && (
        <div className="details-container">
          <BoxDetail box={boxData.find((box) => box.id === selectedBoxes[0])} />
          <div className="forward-button-container">
            <button className="forward-button" onClick={() => setStep(1)}>
              Forward
            </button>
          </div>
        </div>
      )}

      {/* Display CombinedDetail in step 3 */}
      {step === 3 && selectedBoxes.length === 2 && (
        <div className="combined-details">
          <CombinedDetail
            box1={boxData.find((box) => box.id === selectedBoxes[0])}
            box2={boxData.find((box) => box.id === selectedBoxes[1])}
            combinedText={combinedData.find(
              (data) =>
                (data.id1 === selectedBoxes[0] && data.id2 === selectedBoxes[1]) ||
                (data.id1 === selectedBoxes[1] && data.id2 === selectedBoxes[0])
            )}
          />
          <div className="forward-button-container">
            <button className="forward-button" onClick={handleForwardClick}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Relations;
