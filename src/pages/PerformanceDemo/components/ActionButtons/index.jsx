import { memo } from "react";

const ActionButtons = memo(({ onIncrement, onReset }) => {
  console.log("Render ActionButtons");
  return (
    <div className="flex gap-2 *:border *:p-2">
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

export default ActionButtons;
