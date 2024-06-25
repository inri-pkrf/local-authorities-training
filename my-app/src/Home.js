import React from 'react';
import './Home.css';

const homeData = [
  { title: 'הרשות בשע"ח', photo: '/diagram.png', component: 'diagram' },
  { title: 'הערכת מצב', photo: '/gallery.png', component: 'gallery' },
  { title: 'ממשק עבודה בין מכלולים', photo: '/relations.png', component: 'relations' },
  { title: 'עוגן איתן', photo: '/ogen.png', component: 'ogen' },
  { title: 'יעדים לאומיים', photo: '/national_targets.png', component: '' },
];

function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="title">מנהלים ומנהלות מתאמנים ומתאמנות</div>
      <div className="subtitle">הכירו את הכלי הדיגיטלי שעושה סדר בין ממשקי העבודה ברשות המקומית בשעת חירום, באמצעותו תכירו את היעדים הלאומיים ותתכוננו לעוגן צפוני</div>
      <div className="photo-list">
        {homeData.map((item, index) => (
          <div key={index} className="photo-list-item" onClick={() => onNavigate(item.component)}>
            <div className="photo-list-content">
              <div className="photo-list-title">{item.title}</div>
              <img src={process.env.PUBLIC_URL + item.photo} alt={item.title} className="photo-list-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
