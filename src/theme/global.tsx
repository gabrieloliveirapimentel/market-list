import { createTheme } from "@mui/material";

const base = createTheme({
  palette: {
    primary: {
      main: "#7450AC",
      light: "#A881E6",
      dark: "#523480",
    },
    gray: {
      "gray-100": "#FBF9FE",
      "gray-200": "#AFABB6",
      "gray-300": "#252529",
      "gray-400": "#17171A",
      "gray-500": "#111112",
      "gray-600": "#0C0C0D",
      "gray-800": "#EDEAF0",
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

export const theme = createTheme(base, {
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: base.palette.gray["gray-100"],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: base.palette.gray["gray-200"],
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "2px solid",
              borderColor: base.palette.gray["gray-300"],
            },
            "&:hover fieldset": {
              border: "2px solid",
              borderColor: base.palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: base.palette.primary.main,
            },
          },
          "& .MuiInputLabel-root": {
            color: base.palette.gray["gray-200"],
            "&.Mui-focused": {
              color: base.palette.primary.main,
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: base.palette.gray["gray-600"],
          color: base.palette.gray["gray-100"],
        },
      },
    },
  },
});
