import React from 'react';

function GalleryItem({ onClick, photo }) {
  return (
    <img src={photo} alt="Card" onClick={onClick} style={{ width: '90px', height: '20px', cursor: 'pointer' }} />
  );
}

export default GalleryItem;
