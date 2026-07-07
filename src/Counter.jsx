import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current count:{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
    </div>
  );
}

export default Counter;
