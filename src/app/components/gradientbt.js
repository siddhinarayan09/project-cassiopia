// components/GradientButton.js
import React from 'react';

const GradientButton = ({ children, gradient, onClick, className = '' }) => {
  return (
    <button
      className={`text-white font-bold inline-flex items-center justify-center gap-2 ${className}`}
      style={{
        backgroundImage: gradient,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;
