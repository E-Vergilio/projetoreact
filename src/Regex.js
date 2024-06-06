import React, { useState } from 'react';
import './Regexestilo.css';

const DynamicRegex = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleMathOperation = (operation) => {
    const operations = {
      '+': value + 1,
      '-': value - 1,
      '*': value * 2,
      '/': value / 2,
      'x²': value * value,
      'x³': value * value * value,
      '0': 0
    };
    setValue(operations[operation]);
  };

  const count = {
    length: text.length,
    alphabets: (text.match(/[a-zA-Z]/g) || []).length,
    numbers: (text.match(/[0-9]/g) || []).length,
    symbols: (text.match(/[^a-zA-Z0-9\s]/g) || []).length,
    spaces: (text.match(/\s/g) || []).length
  };

  return (
    <div className="dynamic-regex">
      <div>
        <h1>REGEX</h1>
        <h2>Mult Functional Counters</h2>
        <p>Valor: {value}</p>
      </div>
      <div className="buttons">
        {['+', '-', '*', '/', 'x²', 'x³', '0'].map((op) => (
          <button key={op} onClick={() => handleMathOperation(op)}>
            {op}
          </button>
        ))}
      </div>
      <h2>Caracter Counter</h2>
      <div>
        <input type="text" value={text} onChange={handleTextChange} placeholder="Digite algo..." />
        <div className="counters">
          <p>Comprimento do Texto: {count.length}</p>
          <p>Alfabetos: {count.alphabets}</p>
          <p>Números: {count.numbers}</p>
          <p>Símbolos: {count.symbols}</p>
          <p>Espaços: {count.spaces}</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicRegex;
