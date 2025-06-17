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
      h4: { fontSize: "1.5rem", fontWeight: 600 },
      h5: { fontSize: "1.25rem", fontWeight: 600 },
      h6: { fontSize: "1rem", fontWeight: 500 },
      button: { textTransform: "none", fontWeight: 500 },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 0,
          },
          input: {
            padding: 0,
            height: "100%",
            fontSize: "14px",
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${
                mode === "dark" ? "#1e1e1e" : "#fff"
              } inset !important`,
              WebkitTextFillColor: mode === "dark" ? "#fff" : "#000",
              transition: "background-color 5000s ease-in-out 0s",
              fontSize: "14px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            padding: 0,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          input: {
            padding: 0, // just in case
          },
          notchedOutline: {
            border: "none",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: "0.875rem",
            transform: "none",
            position: "static",
            marginBottom: "4px",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1440,
        xl: 1920,
      },
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      create: (props = [], options = {}) => "",
    },
    zIndex: {
      mobileStepper: 1000,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  };
};

const getTheme = (mode = "light") =>
  responsiveFontSizes(createTheme(getDesignTokens(mode)));

export default getTheme;
