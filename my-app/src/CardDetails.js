import React from 'react';

function CardDetails({ card }) {
  return (
    <div>
      <img src={card.photo} alt="Card" style={{ width: '100%', height: 'auto' }} />
      <h2>{card.headline}</h2>
      <p>{card.text}</p>
      <video controls>
        <source src={card.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default CardDetails;
