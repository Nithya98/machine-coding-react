"use client";

import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <div>count: {counter}</div>
      <button
        onClick={() => setCounter((prev) => (counter > 0 ? prev - 1 : 0))}
      >
        Decrement
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </section>
  );
}

export default Counter;
