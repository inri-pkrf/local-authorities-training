import React from 'react';
import './Home.css';

function Home({ onNavigate }) {
  return (

    <div className="content">

  
      <div className="title">
        עזר דיגיטלי לניהול מצבי חירום ברשות המקומית
        </div>
   
      <img src={process.env.PUBLIC_URL + '/hpArrow.png'} className="hpArrow" alt="Ogen"></img>

      <div className='div-list'>
        <div className="photo-list-item" onClick={() => onNavigate('diagram')}>
          <div className="photo-list-content">
            <div className="photo-list-title-homepage">מבנה הרשות המקומית בחירום</div>
            <img src={process.env.PUBLIC_URL + '/mivne.png'} className="photo-list-image-homepage" alt="Diagram" />
          </div>
        </div>
        <div id='line1' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

        <div className="photo-list-item" onClick={() => onNavigate('gallery')}>
          <div className="photo-list-content">
            <div className="photo-list-title-homepage"> הערכת מצב ברשות המקומית בשעת חירום </div>
            <img src={process.env.PUBLIC_URL + '/diagramIcon.png'} className="photo-list-image-homepage" alt="Gallery" />
          </div>
        </div>
        <div id='line2' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>
       
        <div className="photo-list-item" onClick={() => onNavigate('relations')}>
        <div className="photo-list-content">
          <div className="photo-list-title-homepage">ממשקי עבודה בין מכלולים</div>
          <img src={process.env.PUBLIC_URL + '/mimshak.png'} className="photo-list-image-homepage" alt="Relations" />
        </div>
      </div>
      <div id='line3' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

      <div className="photo-list-item" onClick={() => onNavigate('ogen')}>
          <div className="photo-list-content">
            <div className="photo-list-title-homepage"> תרחיש ייחוס מישקי </div>
            <img src={process.env.PUBLIC_URL + '/ogenIcon.png'} className="photo-list-image-homepage" alt="Ogen" />
          </div>
        </div>
       




      </div>

      <img src={process.env.PUBLIC_URL + '/hpArrow.png'} className="hpArrow" id="hpArrow2" alt="Ogen"></img>


      <img src={process.env.PUBLIC_URL + '/LOGOS2.png'} className="homePageLogos" alt="Ogen"></img>

      <div className="subtitle2">
        עזר זה נבנה בשיתוף פעולה בין ענף רשויות במחלקת אוכלוסייה ומגמת אימוני רשויות במכללה הלאומית לאיתנות ישראלית
      </div>
      <div id='line4'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>
      <div className='date'> אוגוסט 2024 </div>
    </div>


  );
}

export default Home;