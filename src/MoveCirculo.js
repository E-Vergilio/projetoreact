import React, { useState } from 'react';

const MovingDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const estiloBola = {
    position: 'absolute',
    top: position.y + 'px',
    left: position.x + 'px',
    width: '30px', // Tamanho maior
    height: '30px', // Tamanho maior
    borderRadius: '50%',
    backgroundColor: '#FF1493', // Rosa forte
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      style={{ 
        width: '400px', 
        height: '400px', 
        position: 'relative', 
        backgroundColor: '#f0f0f0', 
        overflow: 'hidden' // Para limitar a área de movimento
      }}
    >
      <div style={estiloBola}></div>
    </div>
  );
};

export default MovingDot;
