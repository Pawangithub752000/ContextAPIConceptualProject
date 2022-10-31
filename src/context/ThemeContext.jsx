import React from "react";

export const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("dark"); // "Light", "dark"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // if theme equal to dark it would changes to light other wise keep
    // it dark
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
