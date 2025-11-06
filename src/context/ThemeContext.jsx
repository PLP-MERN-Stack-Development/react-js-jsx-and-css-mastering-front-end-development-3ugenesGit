/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Ensure we start in light mode unless explicitly set
if (typeof document !== "undefined") {
  try {
    document.documentElement.classList.remove("dark");
  } catch {
    /* no-op */
  }
}

// 1. Create the Context
const ThemeContext = createContext();

// 2. Custom hook for consuming the context
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider Component
export function ThemeProvider({ children }) {
  // Persist theme preference and default to light mode
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Sync <html> class for Tailwind dark variants globally
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // One-time cleanup of legacy key that might have stored a stuck value
  useEffect(() => {
    try {
      localStorage.removeItem("theme");
    } catch {
      /* no-op */
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
