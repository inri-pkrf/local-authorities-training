import React, { useState } from 'react';
import './Relations.css';
import BoxDetail from './BoxDetail';
import CombinedDetail from './CombinedDetail';

const boxData = [
 
  { id: 1, title: 'מידע לציבור', color: '#a2185b', text: 'Definition for מידע לציבור' },
  { id: 2, title: 'שליטה ודיווח', color: '#233c6c', text: 'Definition for שליטה ודיווח' },
  { id: 3, title: 'אוכלוסייה', color: '#f39200', text: 'Definition for אוכלוסייה' },
  { id: 4, title: 'לוגיסטיקה', color: '#3bb38b', text: 'Definition for לוגיסטיקה' },
  { id: 5, title: 'חינוך', color: '#ad4693', text: 'Definition for חינוך' },
  { id: 6, title: 'הנדסה ותשתיות', color: '#00b1eb', text: 'Definition for הנדסה ותשתיות' },
  { id: 7, title: 'יקל״ר', color: '#f9b143', text: 'Definition for יקל״ר' },  
  { id: 8, title: 'מהל כללי ומשא״ן', color: '#575656', text: 'Definition for מהל כללי ומשא״ן' },
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
              className="colored-box-relations"
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

      
    </div>
  );
}

export default Relations;
