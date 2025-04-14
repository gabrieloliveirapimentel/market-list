import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7450AC",
      light: "#A881E6",
      dark: "#523480",
    },
    gray: {
      "gray-100": "#FBF9FE",
      "gray-200": "#FBF9FE",
      "gray-300": "#252529",
      "gray-400": "#17171A",
      "gray-500": "#111112",
      "gray-600": "#0C0C0D",
    },
    success: {
      main: "#2F723D",
      light: "#4E995E",
    },
    pink: {
      main: "#DB5BBF",
      dark: "#251622",
    },
    orange: {
      main: "#E07B67",
      dark: "#261A17",
    },
    yellow: {
      main: "#BB9F3A",
      dark: "#211E12",
    },
    green: {
      main: "#8CAD51",
      dark: "#1C2015",
    },
    blue: {
      main: "#7B94CB",
      dark: "#1A1D23",
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
});
