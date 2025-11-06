import { useState, useEffect } from 'react';

// Function to get stored value or initial value
function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  if (saved === null) return defaultValue;

  try {
    const parsed = JSON.parse(saved);
    return parsed;
  } catch {
    // Backward compatibility for non-JSON values
    if (key === 'theme') {
      const lowered = String(saved).toLowerCase();
      if (lowered === 'dark' || lowered === 'true') return true;
      if (lowered === 'light' || lowered === 'false') return false;
    }
    return defaultValue;
  }
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // Persist to local storage whenever value changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;