import React, { useEffect, useState } from 'react';
import './IntroComponent.css';

function IntroComponent({ onMoveNext }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVideoEnded(true);
    }, 13000);

    setTimeout(() => {
      setShowIntro(true);
    }, 13050);

  });

  // const timeout1 = () => {
  //   setTimeout(() => {
  //     setIsVideoEnded(true);
  //   }, 13000);
  // }

  // const timeout2 = () => {
  //   setTimeout(() => {
  //     setIsVideoEnded(true);
  //   }, 13000);
  // }

  // const timeout2 = setTimeout(() => {
  //   setShowIntro(true);
  // }, 13050);


  const skipVideo = () => {
    setIsVideoEnded(true);
    setShowIntro(true);
  };

  return (
    <div id="intro-lomda">
      {!isVideoEnded && (
        <>
          <button className="skip" onClick={skipVideo}>
            &lt;&lt;דלג/י
          </button>
          <video className="video-intro" autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + '/introVid.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
      {showIntro && (
        <div className="intro-text-slide-in">
          <img src={process.env.PUBLIC_URL + '/inriLogoSvg.svg'} alt="White Logo" id="logo-white" className="move-to-center" />
          <h1 id="welcome-text-intro">
            מנהלים ומנהלות<br />מתאמנים ומתאמנות
          </h1>
          <p id="introduction-sub">
            הכירו את הכלי הדיגיטלי שמדייק את תפקידי המכלולים ומשפר תהליכים וממשקים ברשות המקומית בשעת חירום.
            <br /><br />
            באמצעותו תשפרו את תהליך הערכת המצב, בדגש על ממשקים בין מכלולים בכלל וביחס למימוש יעדי השירות והמאפשרים הלאומיים.
          </p>
          <img
            src={process.env.PUBLIC_URL + '/whiteArrow.png'}
            className="hpArrow-intro"
            alt="Arrow"
            onClick={onMoveNext} // Trigger the callback when the arrow is clicked
          />
        </div>
      )}
    </div>
  );
};

export default IntroComponent;
