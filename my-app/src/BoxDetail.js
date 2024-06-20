import React from 'react';

const BoxDetail = ({ box }) => {
  return (
    <div className="box-detail">
      <div className="box-detail-title" style={{ color: box.color }}>
        {box.title}
      </div>
      <div className="box-detail-definition">{box.text}</div>
    </div>
  );
};

export default BoxDetail;
