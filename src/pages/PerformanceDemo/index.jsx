import ActionButtons from "@/pages/PerformanceDemo/components/ActionButtons";
import CounterDisplay from "@/pages/PerformanceDemo/components/CounterDisplay";
import ExpensiveChild from "@/pages/PerformanceDemo/components/ExpensiveChild";
import { useCallback, useState } from "react";

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");
  const [mode, setMode] = useState("off");
  const [items, setItems] = useState([{ name: "huys" }, { name: "huy" }]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  const handleChangeName = () => {
    setName((prev) => (prev === "Alice" ? "Bob" : "Alice"));
  };

  const handleAddItem = () => {
    setItems((prev) => [...prev, { name: "item" + (prev.length + 1) }]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button onClick={handleIncrement} className="p-2 border">
          Increment Count
        </button>
        <button onClick={handleChangeName} className="p-2 border">
          Change Name
        </button>
        <button onClick={handleAddItem} className="p-2 border">
          Add Item
        </button>

        <button
          onClick={() => setMode(mode === "off" ? "on" : "off")}
          className="p-2 border"
        >
          {mode === "off" ? "on" : "Off"} useMemo expensiveCalculation
        </button>
      </div>

      <CounterDisplay count={count} />
      <ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
      <ExpensiveChild items={items} mode={mode} />

      <p>Current Name: {name}</p>
    </div>
  );
};

export default PerformanceDemo;
