import React, { useState } from 'react';

export default function Lista() {
  const [lugares, setLugares] = useState([
    { id: 0, nome: 'Tóquio' },
    { id: 1, nome: 'Kyoto' },
    { id: 2, nome: 'Osaka' },
  ]);

  const excluirLugar = (id) => {
    setLugares(lugares.filter(lugar => lugar.id !== id));
  };

  const LugarItem = ({ lugar }) => (
    <li>
      {lugar.nome}{' '}
      <button onClick={() => excluirLugar(lugar.id)}>
        Excluir
      </button>
    </li>
  );

  return (
    <>
      <h1>Lista de Lugares no Japão:</h1>
      <ul>
        {lugares.map(lugar => (
          <LugarItem key={lugar.id} lugar={lugar} />
        ))}
      </ul>
    </>
  );
}
