import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme ==="light"? "dark" : "light")
  }

  return (
    // 3. wrap children in the Provider, passing theme + toggleTheme as value
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}