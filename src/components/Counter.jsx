import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const max = 10;
  if (max <= counter) {
    alert("You reached maximum limit!");
    return;
  }
  return (
    <div>
      <h2>Counter</h2>
      <button
        onClick={() => setCounter((prev) => prev - 5)}
        disabled={counter == 0}
      >
        -
      </button>
      {counter}
      <button onClick={() => setCounter((prev) => prev + 5)}>+</button>
    </div>
  );
};

export default Counter;
