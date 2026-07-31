import { memo } from "react";

const CounterButton = memo(({ count, handleCount }) => {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleCount}>CounterButton</button>
    </div>
  );
});
export default CounterButton;
