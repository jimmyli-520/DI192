import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
}