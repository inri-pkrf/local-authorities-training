// src/components/CardDetails.js
import React from 'react';
import './CardDetails.css';

function CardDetails({ card }) {
  return (
    <div className="card-details">
      <img className="card-details-photo" src={card.photo} alt="Card" />
      <h2 className="card-details-headline">{card.headline}</h2>
      <p className="card-details-text">{card.text}</p>
      <video className="card-details-video" controls>
        <source src={card.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default CardDetails;
