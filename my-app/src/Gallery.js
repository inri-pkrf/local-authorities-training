// src/Gallery.js
import React, { useState } from 'react';
import PhotoList from './PhotoList';
import CardDetails from './CardDetails';
import './Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    { photo: 'path/to/photo1.jpg', headline: 'Headline 1', text: 'Some text for card 1', video: 'path/to/video1.mp4' },
    { photo: 'path/to/photo2.jpg', headline: 'Headline 2', text: 'Some text for card 2', video: 'path/to/video2.mp4' },
    { photo: 'path/to/photo3.jpg', headline: 'Headline 3', text: 'Some text for card 3', video: 'path/to/video3.mp4' },
    { photo: 'path/to/photo4.jpg', headline: 'Headline 4', text: 'Some text for card 4', video: 'path/to/video4.mp4' },
    { photo: 'path/to/photo5.jpg', headline: 'Headline 5', text: 'Some text for card 5', video: 'path/to/video5.mp4' },
    { photo: 'path/to/photo6.jpg', headline: 'Headline 6', text: 'Some text for card 6', video: 'path/to/video6.mp4' },
    { photo: 'path/to/photo7.jpg', headline: 'Headline 7', text: 'Some text for card 7', video: 'path/to/video7.mp4' },
    { photo: 'path/to/photo8.jpg', headline: 'Headline 8', text: 'Some text for card 8', video: 'path/to/video8.mp4' },
    { photo: 'path/to/photo9.jpg', headline: 'Headline 9', text: 'Some text for card 9', video: 'path/to/video9.mp4' },
    { photo: 'path/to/photo10.jpg', headline: 'Headline 10', text: 'Some text for card 10', video: 'path/to/video10.mp4' },
    { photo: 'path/to/photo11.jpg', headline: 'Headline 11', text: 'Some text for card 11', video: 'path/to/video11.mp4' },
    { photo: 'path/to/photo12.jpg', headline: 'Headline 12', text: 'Some text for card 12', video: 'path/to/video12.mp4' },
  ];

  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNavigate = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0 || newIndex >= cardData.length) {
        return prevIndex;
      }
      return newIndex;
    });
  };

  return (
    <div className="gallery">
      <PhotoList data={cardData} onPhotoClick={handlePhotoClick} />
      <CardDetails card={cardData[currentIndex]} />
      <div className="navigation-buttons">
        <button onClick={() => handleNavigate(-1)} disabled={currentIndex === 0}>
          Back
        </button>
        <button onClick={() => handleNavigate(1)} disabled={currentIndex === cardData.length - 1}>
          Forward
        </button>
      </div>
    </div>
  );
};

export default Gallery;
