import React, { createContext, useContext } from 'react';
import useLocalStorage from './useLocalStorage'; // Use the new custom hook

// 1. Create the Context
const ThemeContext = createContext();

// 2. Custom hook for consuming the context
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider Component
export function ThemeProvider({ children }) {
  // Use the custom hook to persist the theme preference
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme', false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-gray-50' 
    : 'bg-gray-50 text-gray-800';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {/* Apply the theme classes to the highest level for global styling */}
      <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}