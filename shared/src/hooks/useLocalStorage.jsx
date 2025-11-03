import { useState, useEffect } from 'react';

/**
 * useLocalStorage - Custom hook for syncing state with localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value if key does not exist
 * @returns {[any, function]} - Returns state and a setter function
 */
export function useLocalStorage(key, initialValue) {
  // Get from localStorage or fallback to initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`useLocalStorage: Error reading key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage whenever state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`useLocalStorage: Error setting key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
