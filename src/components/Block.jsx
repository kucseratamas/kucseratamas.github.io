import React from 'react';
import './Block.css';

const Block = ({ children, className = "", width, height }) => {
  return (
    <div
      className={`glass ${className}`}
      style={{
        width: width || "100%",
        height: height || "auto"
      }}
    >
      {children}
    </div>
  );
};

export default Block;