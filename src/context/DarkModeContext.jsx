import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' ? true : false
  );
  const toggleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    isDarkMode ? (localStorage.theme = '') : (localStorage.theme = 'dark');
  };

  useEffect(() => {
    if (isDarkMode || localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}
