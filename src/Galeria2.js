import React, { useState, useEffect } from 'react';
import imageData from './data'; // Importa os dados das imagens

const GaleriaDeImagens = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const avancar = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % imageData.length);
    setMostrarDetalhes(false); // Resetar mostrarDetalhes ao avançar para próxima imagem
  };

  const retroceder = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior === 0 ? imageData.length - 1 : indiceAnterior - 1));
    setMostrarDetalhes(false);
  };

  const toggleDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Tecla de seta para a esquerda
        retroceder();
      } else if (event.keyCode === 39) { // Tecla de seta para a direita
        avancar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [indiceAtual]);

  return (
    <div className="galeria-container">
      <h1>Galeria de Imagens</h1>
      <div className="imagem-container">
        <img 
          src={imageData[indiceAtual].src} 
          alt={`Imagem ${indiceAtual + 1}`} 
          style={{ width: '25%', height: 'auto' }} // Definindo largura como 25%
        />
        <div className="detalhes-container">
          <p>Imagem {indiceAtual + 1} de {imageData.length}</p>
          <button className="btn-anterior" onClick={retroceder}>&lt; Anterior</button>
          <button className="btn-proxima" onClick={avancar}>Próxima &gt;</button>
          <button className="btn-detalhes" onClick={toggleDetalhes}>{mostrarDetalhes ? 'Esconder Detalhes' : 'Mostrar Detalhes'}</button>
        </div>
      </div>
      {mostrarDetalhes && <p className="detalhes">{imageData[indiceAtual].details}</p>}
    </div>
  );
};

export default GaleriaDeImagens;
