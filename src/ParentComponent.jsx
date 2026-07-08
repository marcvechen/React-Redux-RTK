import React, { useState } from "react";
import Hello from "./ChildComponent";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Hello name="asd" count={count} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Увеличить
      </button>
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
        }
      >
        Уменьшить
      </button>
      <button
        onClick={() => setCount(() => Math.floor(Math.random() * 10 + 1))}
      >
        Случайное
      </button>
      <button onClick={() => setCount(0)}>Сбросить</button>
    </div>
  );
}
export default Counter;
