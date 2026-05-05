import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div style={styles}>
      <h1>Current theme: {theme}</h1>
      <ThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}