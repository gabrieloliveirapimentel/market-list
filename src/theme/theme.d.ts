// src/theme/theme.d.ts
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    gray: {
      'gray-100': string;
      'gray-200': string;
      'gray-300': string;
      'gray-400': string;
      'gray-500': string;
      'gray-600': string;
    },
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
    gray?: {
      'gray-100': string;
      'gray-200': string;
      'gray-300': string;
      'gray-400': string;
      'gray-500': string;
      'gray-600': string;
    },
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
