// app/context/ThemeContext.js
"use client";
import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "../theme/theme";

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("themeMode") || "light";
    setMode(storedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeContextProvider;
