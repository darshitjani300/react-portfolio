import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

const readInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* storage can be blocked — fall through to the system preference */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Follow the OS until the visitor picks a side themselves.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      let stored = null;
      try {
        stored = window.localStorage.getItem("theme");
      } catch {
        /* ignore */
      }
      if (!stored) setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
