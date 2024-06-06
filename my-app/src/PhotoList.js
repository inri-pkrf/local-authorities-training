// src/components/PhotoList.js
import React from 'react';
import './PhotoList.css';

const PhotoList = ({ data, onPhotoClick }) => {
  return (
    <div className="photo-list">
      
      {data.map((item, index) => (
        <div key={index} className="photo-list-item" onClick={() => onPhotoClick(index)}>
          <div className="photo-list-content">
            <div className="photo-list-title">{item.title}</div>
            <img src={process.env.PUBLIC_URL + item.photo} className="photo-list-image" />
          <div className="photo-list-number">{index + 1}</div>
          </div>
        
        </div>
        
      ))}
    </div>
  );
};

export default PhotoList;
