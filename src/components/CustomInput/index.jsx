import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          inputRef.current?.focus();
        },
        blur: () => {
          inputRef.current?.blur();
        },
        getValue: () => {
          return inputRef.current?.value;
        },
        clear: () => {
          if (inputRef.current) inputRef.current.value = "";
        },
      };
    },
    []
  );

  return (
    <div style={{ marginBottom: "12px" }}>
      {props.label && (
        <label style={{ display: "block", marginBottom: "4px" }}>
          {props.label}
        </label>
      )}
      <input
        ref={inputRef}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
});

export default CustomInput;
