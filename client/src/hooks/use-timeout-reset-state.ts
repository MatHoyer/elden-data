import { useCallback, useRef, useState } from "react";

export const useTimeoutResetState = <T>(defaultValue: T, delay: number) => {
  const [value, setValue] = useState(defaultValue);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setTimeoutResetValue = useCallback(
    (value: T) => {
      setValue(value);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setValue(defaultValue), delay);
    },
    [delay, defaultValue],
  );

  return {
    value,
    setValue: setTimeoutResetValue,
  };
};
