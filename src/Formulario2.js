import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <div>
        <h1>Formulário</h1>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
      </div>
      <div>
        <label>Sobrenome:</label>
        <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <h2>Email Digitado:</h2>
        <p>{formData.email}</p>
      </div>
    </div>
  );
}

export default Formulario;
