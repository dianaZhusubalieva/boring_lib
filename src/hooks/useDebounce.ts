import { useEffect, useState } from "react";

export const useDebounce = (value: any, timeout: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const handler = setTimeout(() => {
    setDebouncedValue(value);
  }, timeout);

  useEffect(() => {
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
