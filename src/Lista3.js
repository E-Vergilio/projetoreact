import React, { useState } from 'react';

const artistasIniciais = [
  { id: 0, nome: 'Hayao Miyazaki' },
  { id: 1, nome: 'Akira Kurosawa' },
  { id: 2, nome: 'Hatsune Miku' },
];

export default function Lista() {
  const [nome, setNome] = useState('');
  const [artistas, setArtistas] = useState(artistasIniciais);

  const handleInputChange = (e) => {
    setNome(e.target.value);
  };

  const handleAddArtista = () => {
    if (nome.trim() === '') {
      alert('Por favor, insira o nome do artista.');
      return;
    }

    const novoArtista = { id: artistas.length, nome: nome };
    setArtistas([...artistas, novoArtista]);
    setNome('');
  };

  return (
    <>
      <h1>Lista de Ícones da Cultura Japonesa:</h1>
      <input
        value={nome}
        onChange={handleInputChange}
        placeholder="Nome do artista"
      />
      <button onClick={handleAddArtista}>
        Inserir
      </button>
      <ul>
        {artistas.map(artista => (
          <li key={artista.id}>{artista.nome}</li>
        ))}
      </ul>
    </>
  );
}
