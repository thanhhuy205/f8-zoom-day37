import { memo, useMemo } from "react";

const ExpensiveChild = memo(({ items, mode = "off" }) => {
  console.log("Render ExpensiveChild");

  const totalLength = useMemo(() => {
    console.log("Expensive calculation running...");
    return items.reduce((sum, item) => sum + item.name.length, 0);
  }, [items]);

  const expensiveCalculation = () => {
    console.log("Calculating longest name... Mode ", mode);
    let longest = " ";
    items.forEach((item) => {
      for (let i = 0; i < 100000; i++) {}
      if (item.name.length > longest.length) {
        longest = item.name;
      }
    });
    return longest;
  };

  const longestName = useMemo(
    expensiveCalculation,
    mode === "on" ? [items] : [Math.random()]
  );

  return (
    <div>
      <h2>Items ({items.length})</h2>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it.name}</li>
        ))}
      </ul>
      <p>Total characters: {totalLength}</p>

      <p>
        Item most length <span>{longestName}</span>
      </p>
    </div>
  );
});

export default ExpensiveChild;
