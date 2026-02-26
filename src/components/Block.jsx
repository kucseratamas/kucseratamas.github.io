import React from 'react';
import './Block.css';

const Block = ({ children, className = "", width, height,  }) => {
  return <div className={`glass ${className}`} style={{
        width: width || "260px",
        height: height || "180px",
      }}>{children}</div>;
};

export default Block;