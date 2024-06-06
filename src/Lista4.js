import React, { useState } from 'react';

const comidasJaponesas = [
  { id: 0, title: 'Sushi' },
  { id: 1, title: 'Tempura' },
  { id: 2, title: 'Ramen' },
];

export default function Lista() {
  const [lista, setLista] = useState(comidasJaponesas);

  const handleClick = () => {
    const proximaLista = [...lista].reverse();
    setLista(proximaLista);
  };

  return (
    <>
      <button onClick={handleClick}>
        Reverter
      </button>
      <ul>
        {lista.map(comida => (
          <li key={comida.id}>{comida.title}</li>
        ))}
      </ul>
    </>
  );
}
