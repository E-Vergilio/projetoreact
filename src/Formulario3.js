import React, { useState } from 'react';

function Formulario3() {
  const [formData, setFormData] = useState({
    nome: '',
    titulo: '',
    cidade: '',
    imagemUrl: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <h1>Formulario3</h1>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nome">Nome:</label><br />
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="titulo">Título:</label><br />
          <input 
            type="text" 
            id="titulo" 
            name="titulo" 
            value={formData.titulo} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cidade">Cidade:</label><br />
          <input 
            type="text" 
            id="cidade" 
            name="cidade" 
            value={formData.cidade} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="imagemUrl">Imagem:</label><br />
          <input 
            type="text" 
            id="imagemUrl" 
            name="imagemUrl" 
            value={formData.imagemUrl} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>Enviar</button>
      </form>
      
      {isSubmitted && (
        <div>
          {formData.nome && <p><strong>Nome:</strong> {formData.nome}</p>}
          {formData.titulo && <p><strong>Título:</strong> {formData.titulo}</p>}
          {formData.cidade && <p><strong>Cidade:</strong> {formData.cidade}</p>}
          {isValidUrl(formData.imagemUrl) && (
            <div>
              <strong>Imagem:</strong><br />
              <img 
                src={formData.imagemUrl} 
                alt="Imagem do formulário" 
                style={{ width: '300px', height: '200px', objectFit: 'cover', border: '1px solid #ddd', borderRadius: '4px' }} 
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Formulario3;
