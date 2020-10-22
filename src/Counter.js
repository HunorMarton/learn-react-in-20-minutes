import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0)

  const decrease = () => setCounter(counter - 1)
  const increase = () => setCounter(counter + 1)

  return (
    <div className="Counter">
      <h3>
        {counter}
      </h3>
      {counter < 0 && <p>Too low</p>}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>

    </div>
  );
}

export default Counter;
