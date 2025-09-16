import { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
    
  const toggleValue = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggleValue, setValue];
};

export default useToggle;
