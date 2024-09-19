
import React, { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);
  const [isReset, setIsReset] = useState(false);

  const handleClick = () => {
    if (isReset) {
      setCount(0);
      setIsReset(false);
    } else {
      setCount(count + 1);
      setIsReset(true);
    }
  };

  return (
    <div>
     <h1>{count}</h1>
      <button onClick={handleClick}>{isReset ? 'Reset' : 'Increment'}</button>

    </div>
  );
}

export default Counter;
