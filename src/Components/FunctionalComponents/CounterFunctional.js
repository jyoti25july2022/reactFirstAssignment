import React, { useState } from 'react';

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Functional Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default CounterFunctional;
