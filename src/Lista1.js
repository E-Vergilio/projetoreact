import React, { useState, useCallback } from 'react';

// Componente PersonInput
function PersonInput({ addPerson }) {
  const [personName, setPersonName] = useState('');

  const handleAddPerson = () => {
    if (personName.trim() !== '') {
      addPerson(personName);
      setPersonName('');
    } else {
      alert('Por favor, insira um nome válido.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
        placeholder="Digite o nome da pessoa"
      />
      <button onClick={handleAddPerson}>Adicionar</button>
    </div>
  );
}

// Componente PersonList
function PersonList({ people, deletePerson }) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          {person}
          <button onClick={() => deletePerson(index)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
}

// Componente List
function List() {
  const [people, setPeople] = useState([]); // Estado para armazenar as pessoas

  const addPerson = useCallback((personName) => {
    setPeople((prevPeople) => [...prevPeople, personName]);
  }, []);

  const deletePerson = useCallback((index) => {
    setPeople((prevPeople) => prevPeople.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <h1>Lista 1 - Listagem de Pessoas</h1>
      <PersonInput addPerson={addPerson} />
      <PersonList people={people} deletePerson={deletePerson} />
    </div>
  );
}

export default List;
