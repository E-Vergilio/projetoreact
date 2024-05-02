import React, { useState, useEffect } from 'react';

function Letreiro() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const words = 'Conheça a Fatec';

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words.substring(0, index));
      setIndex((prevIndex) => (prevIndex === words.length ? 0 : prevIndex + 1));
    }, 200); // Velocidade da digitação em milissegundos

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <h1>{text}</h1>
    </>
  );
}

export default Letreiro;

