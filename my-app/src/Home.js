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
          <div className="photo-list-title">הרשות בשע"ח</div>
          <img src={process.env.PUBLIC_URL + '/path_to_image'} className="photo-list-image" alt="Diagram" />
        </div>
      </div>
      <div className="photo-list-item" onClick={() => onNavigate('gallery')}>
        <div className="photo-list-content">
          <div className="photo-list-title">הערכת מצב</div>
          <img src={process.env.PUBLIC_URL + '/path_to_image'} className="photo-list-image" alt="Gallery" />
        </div>
      </div>
      <div className="photo-list-item" onClick={() => onNavigate('relations')}>
        <div className="photo-list-content">
          <div className="photo-list-title">ממשק עבודה בין מכלולים</div>
          <img src={process.env.PUBLIC_URL + '/path_to_image'} className="photo-list-image" alt="Relations" />
        </div>
      </div>
      <div className="photo-list-item" onClick={() => onNavigate('ogen')}>
        <div className="photo-list-content">
          <div className="photo-list-title">עוגן איתן</div>
          <img src={process.env.PUBLIC_URL + '/path_to_image'} className="photo-list-image" alt="Ogen" />
        </div>
      </div>
    </div>
  );
}

export default Home;
