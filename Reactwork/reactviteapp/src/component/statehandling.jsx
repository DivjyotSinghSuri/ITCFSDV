import React, { useState } from "react";

function StateHandling() {
  const [counter, setCounter] = useState(20);
  const decreaseValue = () => setCounter(counter - 20);

  function increaseValue() {
    setCounter(counter + 10);
  }

  return (
    <div>
      <h2>Counter value = {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </div>
  );
}

export default StateHandling;
