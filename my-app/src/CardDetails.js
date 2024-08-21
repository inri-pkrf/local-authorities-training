import React from 'react';
import './CardDetails.css';

function CardDetails({ card }) {
  return (
    <div className="card-details">
      <img className="card-details-photo" src={process.env.PUBLIC_URL + card.photo} alt="Card" />
      <h2 className="card-details-headline">{card.headline}</h2>
      <video
        key={card.video}
        className="card-details-video"
        style={{ display: card.video === '/ass10.mp4' ? 'none' : 'block' }}
        controls
      >
        <source src={process.env.PUBLIC_URL + '/' + card.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="card-details-text">{card.text}</p>
    </div>
  );
}

export default CardDetails;
