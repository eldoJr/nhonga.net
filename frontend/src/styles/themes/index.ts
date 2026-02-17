import { colors } from '../colors';

export const lightTheme = {
  colors: {
    background: colors.white,
    surface: colors.nhonga[50],
    surfaceHover: colors.nhonga[100],
    primary: colors.nhonga[500],
    primaryHover: colors.nhonga[600],
    secondary: colors.nhonga[700],
    text: {
      primary: colors.nhonga[900],
      secondary: colors.nhonga[700],
      muted: colors.nhonga[600]
    },
    border: colors.nhonga[200],
    success: colors.nhonga[600],
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  }
};

export const darkTheme = {
  colors: {
    background: colors.nhonga[1000],
    surface: colors.nhonga[950],
    surfaceHover: colors.nhonga[900],
    primary: colors.nhonga[400],
    primaryHover: colors.nhonga[300],
    secondary: colors.nhonga[500],
    text: {
      primary: colors.nhonga[50],
      secondary: colors.nhonga[100],
      muted: colors.nhonga[200]
    },
    border: colors.nhonga[800],
    success: colors.nhonga[400],
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA'
  }
};

export type Theme = typeof lightTheme;