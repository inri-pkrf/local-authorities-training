// Ogen.js
import React from 'react';
import './Ogen.css'; // Import Ogen component CSS

function Ogen() {
  return (
    <div className="ogen-container">
      <h1 className="ogen-title">עוגן איתן  - תרחיש ייחוס משקי</h1>
      <p className="ogen-subtitle">Your Subtitle Here</p>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/ogen1.png'} alt="Image 1" className="ogen-image" />
        <img src={process.env.PUBLIC_URL + '/ogen2.png'} alt="Image 2" className="ogen-image" />
        <img src={process.env.PUBLIC_URL + '/ogen3.png'} alt="Image 3" className="ogen-image" />
        <img src={process.env.PUBLIC_URL + '/ogen4.png'} alt="Image 4" className="ogen-image" />
        <img src={process.env.PUBLIC_URL + '/ogen5.png'} alt="Image 5" className="ogen-image" />
      </div>
      <div className="video-container">
        <video controls className="ogen-video">
          <source src={process.env.PUBLIC_URL + '/ogenVideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Ogen;
