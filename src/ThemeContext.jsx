import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const handleMode = () => {
    setIsDark((prevMode) => !prevMode);
  };
  useEffect(() => {
    isDark
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark, handleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
