import React, { useEffect, useState } from 'react';
import './IntroComponent.css';

function IntroComponent({ onMoveNext }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    const videoEndTimeout = setTimeout(() => {
      setIsVideoEnded(true);
    }, 13000);

    const introTextTimeout = setTimeout(() => {
      setShowIntro(true);
    }, 13050);

    const skipButtonTimeout = setTimeout(() => {
      setShowSkipButton(true);
    }, 3500); // Show the skip button after 5 seconds

    return () => {
      clearTimeout(videoEndTimeout);
      clearTimeout(introTextTimeout);
      clearTimeout(skipButtonTimeout);
    };
  }, []);

  const skipVideo = () => {
    setIsVideoEnded(true);
    setShowIntro(true);
  };

  return (
    <div id="intro-lomda">
      {!isVideoEnded && (
        <>
          {showSkipButton && (
            <button className="skip" onClick={skipVideo}>
              &lt;&lt;דלג/י
            </button>
          )}
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
            onClick={onMoveNext}
          />
        </div>
      )}
    </div>
  );
};

export default IntroComponent;
