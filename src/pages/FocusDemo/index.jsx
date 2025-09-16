import CustomInput from "@/components/CustomInput";
import { useRef, useState } from "react";

const FocusDemo = () => {
  const custom_fs = useRef(null);
  const custom_sc = useRef(null);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const renderCounter = useRef(0);
  renderCounter.current += 1;
  const handleClear = () => {
    console.log("handleClear");
    custom_fs.current.clear();
    custom_sc.current.clear();
    setValue1("");
    setValue2("");
  };

  const handleGetValue = () => {
    console.log("handleGetValue");
    console.log("input 1 ", custom_fs.current.getValue() || "Không có gì");
    console.log("input 2 ", custom_sc.current.getValue() || "Không có gì");
  };

  return (
    <div className="space-x-5">
      <h1>FocusDemo render {renderCounter.current}</h1>
      <CustomInput
        ref={custom_fs}
        label="Input 1"
        placeholder="Nhập text 1..."
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />

      <CustomInput
        ref={custom_sc}
        label="Input 2"
        placeholder="Nhập text 2..."
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />

      <div className="mt-5 space-x-4 *:p-4 *:border *:rounded-lg *:hover:bg-slate-200 *:cursor-pointer *:transition-all">
        <button onClick={() => custom_fs.current.focus()}>Focus Input 1</button>
        <button onClick={() => custom_sc.current.focus()}>Focus Input 2</button>
        <button onClick={handleClear}>Clear Both</button>
        <button onClick={handleGetValue}>Get Values</button>
      </div>
    </div>
  );
};

export default FocusDemo;
