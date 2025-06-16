import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { darkColors, lightColors } from "./colors";

const getDesignTokens = (mode) => {
  const colors = mode === "dark" ? darkColors : lightColors;

  return {
    palette: {
      mode,
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
    },
    typography: {
      fontFamily: `'Inter', 'Roboto', 'Arial', sans-serif`,
      h1: { fontSize: "3rem", fontWeight: 700 },
      h2: { fontSize: "2.25rem", fontWeight: 600 },
      h3: { fontSize: "1.875rem", fontWeight: 600 },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      h5: { fontSize: "1.25rem", fontWeight: 500 },
      h6: { fontSize: "1rem", fontWeight: 500 },
      button: { textTransform: "none", fontWeight: 500 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": { boxSizing: "border-box" },
          body: (theme) => ({
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            transition: "background-color 0.3s ease, color 0.3s ease",
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 8, boxShadow: "none" },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: "6px 10px",
          },
          input: { padding: "6px 0" },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: { border: "none" },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: "0.875rem",
          },
        },
      },
    },
  };
};

const getTheme = (mode = "light") =>
  responsiveFontSizes(createTheme(getDesignTokens(mode)));

export default getTheme;
