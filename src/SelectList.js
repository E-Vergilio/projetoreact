import React, { useState } from 'react';

// Lista inicial de artes marciais do Japão
const initialList = [
  { id: 0, title: 'Karate', visto: false },
  { id: 1, title: 'Judo', visto: false },
  { id: 2, title: 'Aikido', visto: true },
  { id: 3, title: 'Kendo', visto: false },
  { id: 4, title: 'Sumo', visto: false },
];

// Componente principal
export default function ListaDeArtesMarciais() {
  // Estado para armazenar as listas de artes marciais
  const [minhaLista, setMinhaLista] = useState(initialList);
  const [suaLista, setSuaLista] = useState(initialList);

  // Função para alternar o estado de uma arte marcial na lista
  const handleAlternarLista = (id, lista, setLista) => {
    const novaLista = lista.map(arte =>
      arte.id === id ? { ...arte, visto: !arte.visto } : arte
    );
    setLista(novaLista);
  };

  return (
    <>
      <h1>Lista de Artes Marciais do Japão</h1>
      <h2>Minha lista de artes marciais a praticar:</h2>
      <ListaDeItens
        artes={minhaLista}
        onAlternar={(id) => handleAlternarLista(id, minhaLista, setMinhaLista)}
      />
      <h2>Sua lista de artes marciais a praticar:</h2>
      <ListaDeItens
        artes={suaLista}
        onAlternar={(id) => handleAlternarLista(id, suaLista, setSuaLista)}
      />
    </>
  );
}

// Componente para exibir a lista de artes marciais
function ListaDeItens({ artes, onAlternar }) {
  return (
    <ul>
      {artes.map(arte => (
        <li key={arte.id}>
          <label>
            <input
              type="checkbox"
              checked={arte.visto}
              onChange={() => onAlternar(arte.id)}
            />
            {arte.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
