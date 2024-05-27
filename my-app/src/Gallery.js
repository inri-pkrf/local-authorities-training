import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import CardDetails from './CardDetails';
import cardData from './cardData'; 

function Gallery() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleItemClick = (index) => {
    setSelectedCard(cardData[index]);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cardData.map((item, index) => (
          <GalleryItem key={item.id} photo={item.photo} onClick={() => handleItemClick(index)} />
        ))}
      </div>
      {selectedCard && <CardDetails card={selectedCard} />}
    </div>
  );
}

export default Gallery;
