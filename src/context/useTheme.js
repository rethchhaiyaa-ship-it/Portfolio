import { useContext } from 'react'
import { ThemeStore } from './themeStore.js'

export default function useTheme() {
  const context = useContext(ThemeStore)
  if (!context) throw new Error('useTheme must be used inside a ThemeProvider')
  return context
}