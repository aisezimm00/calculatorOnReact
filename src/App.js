import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = Function(`return (${input})`)();
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
      />
      <button onClick={calculateResult}>посчитать</button>
      <div>результат: {result}</div>
    </div>
  );
}

export default Calculator;
