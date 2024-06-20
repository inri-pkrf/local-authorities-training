import React from 'react';

const CombinedDetail = ({ box1, box2, combinedText }) => {
  return (
    <div className="combined-detail">
      <div className="combined-detail-title" style={{ color: box1.color }}>
        {box1.title}
      </div>
      <div className="combined-detail-title" style={{ color: box2.color }}>
        {box2.title}
      </div>
      <div className="combined-detail-content">
        {combinedText ? combinedText.text : 'No combined data available.'}
      </div>
    </div>
  );
};

export default CombinedDetail;
