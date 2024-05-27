// src/components/PhotoList.js
import React from 'react';
import './PhotoList.css';

const PhotoList = ({ data, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {data.map((item, index) => (
        <img
          key={index}
          src={item.photo}
          alt={`Photo ${index + 1}`}
          className="photo-list-item"
          onClick={() => onPhotoClick(index)}
        />
      ))}
    </div>
  );
};

export default PhotoList;
