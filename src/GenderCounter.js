import React, { useState } from 'react';
import M from "./Img/mavatar.jpg"; 
import F from "./Img/favatar.jpg"; 
function GenderCounter() {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const addMale = () => {
    setMaleCount(maleCount + 1);
  };

  const removeMale = () => {
    if (maleCount > 0) {
      setMaleCount(maleCount - 1);
    }
  };

  const addFemale = () => {
    setFemaleCount(femaleCount + 1);
  };

  const removeFemale = () => {
    if (femaleCount > 0) {
      setFemaleCount(femaleCount - 1);
    }
  };

  const totalCount = maleCount + femaleCount;

  return (
    <div className="counter" style={{ border: '8px solid #ccc', padding: '7px', width: '500px', margin: 'auto', marginTop: '40px', borderRadius: '15px', position: 'relative' }}>
      <div className="person-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div className="person" style={{ textAlign: 'center', marginBottom: '0px' }}>
          <img src={M} alt="Masculino" style={{ width: '210px', height: '210px', margin: '5px' }} />
          <button onClick={addMale} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>+</button>
          <button onClick={removeMale} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>-</button>
          <span id="maleCount">{maleCount}</span>
        </div>
        <div className="person" style={{ textAlign: 'center', marginBottom: '0px' }}>
          <img src={F} alt="Feminino" style={{ width: '210px', height: '210px', margin: '5px' }} />
          <button onClick={addFemale} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>+</button>
          <button onClick={removeFemale} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>-</button>
          <span id="femaleCount">{femaleCount}</span>
        </div>
      </div>
      <h3>Total: <span id="totalCount">{totalCount}</span></h3>
      <button onClick={() => window.location.reload()} style={{ position: 'absolute', top: '10px', right: '10px' }}>&#8635;</button>
    </div>
  );
}

export default GenderCounter;
