import React from 'react';

const Formulario = () => {
  const nomes = ['Yuki', 'Hana', 'Takumi', 'Sakura', 'Haruto'];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nome = formData.get('nome');
    const mensagem = formData.get('mensagem');
    console.log(`Nome: ${nome}, Mensagem: ${mensagem}`);
    event.target.reset(); // Limpa o formulário
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Selecione o nome:
            <select name="nome" style={{ marginLeft: '10px' }}>
              {nomes.map((nome, index) => (
                <option key={index} value={nome}>{nome}</option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Mensagem:
            <textarea name="mensagem" style={{ display: 'block', width: '100%', height: '100px' }} />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
