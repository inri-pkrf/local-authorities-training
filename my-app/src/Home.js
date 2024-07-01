import React from 'react';
import './Home.css';

function Home({ onNavigate }) {
  return (
    <div className="content">
      <div className="title">מנהלים ומנהלות<br />מתאמנים ומתאמנות</div>
      <div className="subtitle">
        הכירו את הכלי הדיגיטלי שעושה סדר בין ממשקי העבודה ברשות המקומית בשעת חירום,
        באמצעותו תכירו את היעדים הלאומיים ותתכוננו לעוגן צפוני
      </div>
      <div className="photo-list-item" onClick={() => onNavigate('diagram')}>
        <div className="photo-list-content">
          <div className="photo-list-title-homepage">הרשות בשע"ח</div>
          <img src={process.env.PUBLIC_URL + '/mivne.png'} className="photo-list-image-homepage" alt="Diagram" />
        </div>
      </div>
      <div className="photo-list-item" onClick={() => onNavigate('gallery')}>
        <div className="photo-list-content">
          <div className="photo-list-title-homepage">הערכת מצב</div>
          <img src={process.env.PUBLIC_URL + '/diagramIcon.png'} className="photo-list-image-homepage" alt="Gallery" />
        </div>
      </div>
      {/* <div className="photo-list-item" onClick={() => onNavigate('relations')}>
        <div className="photo-list-content">
          <div className="photo-list-title">ממשק עבודה בין מכלולים</div>
          <img src={process.env.PUBLIC_URL + '/path_to_image'} className="photo-list-image" alt="Relations" />
        </div>
      </div> */}
      <div className="photo-list-item" onClick={() => onNavigate('ogen')}>
        <div className="photo-list-content">
          <div className="photo-list-title-homepage">עוגן איתן</div>
          <img src={process.env.PUBLIC_URL + '/ogenIcon.png'} className="photo-list-image-homepage" alt="Ogen" />
        </div>
      </div>
    </div>

    
  );
}

export default Home;
