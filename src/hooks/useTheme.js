// src/hooks/useTheme.js
import { useState } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return [darkMode, toggleTheme];
};

export default useTheme;

