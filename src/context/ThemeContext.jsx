import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-primary-black");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-primary-black");
      document.body.classList.add("bg-[#f9f9f9]");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
