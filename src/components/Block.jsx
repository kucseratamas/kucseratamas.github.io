// Block.jsx
import React from 'react';
import './Block.css';

const Block = ({ children, className = "" }) => {
  return <div className={`glass ${className}`}>{children}</div>;
};

export default Block;