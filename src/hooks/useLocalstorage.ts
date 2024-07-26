import { useEffect, useState } from 'react';

export const useLocalstorage = <T extends unknown>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
