import React from 'react';
import './CardDetails.css';

function CardDetails({ card }) {
  return (
    <div className="card-details">
      <img className="card-details-photo" src={process.env.PUBLIC_URL + card.photo} alt="Card" />
      <h2 className="card-details-headline">{card.headline}</h2>
      <p className="card-details-text">{card.text}</p>
      <video className="card-details-video" controls>
        <source src={card.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default CardDetails;
