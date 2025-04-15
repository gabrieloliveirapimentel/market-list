// src/theme/theme.d.ts
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    gray: Record<string, string>;
    success: {
      main: string;
      light: string;
    },
    pink: {
      main: string;
      dark: string;
    },
    orange: {
      main: string;
      dark: string;
    },
    yellow: {
      main: string;
      dark: string;
    },
    green: {
      main: string;
      dark: string;
    },
    blue: {
      main: string;
      dark: string;
    },
  }

  interface PaletteOptions {
    gray: Record<string, string>
    success: {
      main: string;
      light: string;
    },
    pink: {
      main: string;
      dark: string;
    },
    orange: {
      main: string;
      dark: string;
    },
    yellow: {
      main: string;
      dark: string;
    },
    green: {
      main: string;
      dark: string;
    },
    blue: {
      main: string;
      dark: string;
    },
  }
}
