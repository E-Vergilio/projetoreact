import React, { useState, useEffect } from 'react';

function Relogio() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <h1>Meu Relógio</h1>
      <h2>{date.toLocaleDateString()} {date.toLocaleTimeString()}</h2>
    </>
  );
}

export default Relogio;
