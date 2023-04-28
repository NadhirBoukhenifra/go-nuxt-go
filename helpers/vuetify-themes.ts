import { ThemeDefinition } from 'vuetify'

export const LIGHT = 'light'
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f8fafc',
    surface: '#f8fafc',
    primary: '#0ea5e9',
    secondary: '#84cc16',
    accent: '#ec4899',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b'
  }
}

export const DARK = 'dark'
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#020617',
    surface: '#0f172a',
    primary: '#0ea5e9',
    secondary: '#84cc16',
    accent: '#ec4899',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b'
  }
}
