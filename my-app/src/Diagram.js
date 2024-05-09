import React from 'react';
import './Diagram.css';


function Diagram() {
  return (
    <div className="diagram-container">
      <h1 className="diagram-title">מבנה הרשות המקומית בשעת חירום</h1>
      <div className="frame">
        <p className="frame-text">ראש הרשות</p>
      </div>
      <div className="line"></div>
      <div className="black-frame">
        <p className="black-frame-text">מנכל הרשות\ ר"מט</p>
      </div>
      <img src={process.env.PUBLIC_URL + '/orange-removebg.png'} className="orange" alt="logo" />
      <img src={process.env.PUBLIC_URL + '/blue-removebg.png'} className="blue" alt="logo" />    
      <img src={process.env.PUBLIC_URL + '/red-removebg.png'} className="red" alt="logo" />    

      <img src={process.env.PUBLIC_URL + '/triangle.png'} className="triangle" alt="logo" />    
      {/* Add your diagram content here */}
    </div>
  );
}


export default Diagram;
