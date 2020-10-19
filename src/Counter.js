import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0)

  const decrease = () => setCounter(counter - 1)
  const increase = () => setCounter(counter + 1)

  return (
    <div className="Counter">
      <h3 style={{ color: counter < 0 ? "#1F271B" : "white" }}>
        {counter}
      </h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
