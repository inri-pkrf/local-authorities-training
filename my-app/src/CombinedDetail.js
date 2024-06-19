import React from 'react';

const CombinedDetail = ({ box1, box2 }) => {
  return (
    <div className="combined-detail">
      <div className="combined-detail-title">
        {box1.title} + {box2.title}
      </div>
      <div className="combined-detail-content">
        Combined details for {box1.title} and {box2.title}
      </div>
    </div>
  );
};

export default CombinedDetail;
