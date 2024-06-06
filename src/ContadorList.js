import React, { useState } from 'react';

const initialCounters = [
  { count: 0, team: "ヨコハマF・マリノス (Yokohama F. Marinos)" },
  { count: 0, team: "鹿島アントラーズ (Kashima Antlers)" },
  { count: 0, team: "浦和レッドダイヤモンズ (Urawa Red Diamonds)" }
];

export default function ListaDeContadores() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((counter, i) => {
      if (i === index) {
        return { ...counter, count: counter.count + 1 };
      } else {
        return counter;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div>
      <h1>Lista de Contadores</h1>
      <ul>
        {counters.map((counter, index) => (
          <li key={index}>
            {counter.team}: {counter.count}
            <button onClick={() => handleIncrementClick(index)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
