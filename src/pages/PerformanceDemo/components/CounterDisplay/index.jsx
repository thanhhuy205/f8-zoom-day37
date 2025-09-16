import { memo } from "react";

const CounterDisplay = memo(({ count }) => {
  console.log("Render CounterDisplay");

  return <h1>Counter {count}</h1>;
});

export default CounterDisplay;
