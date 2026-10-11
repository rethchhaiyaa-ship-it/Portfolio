import { useEffect, useState } from 'react'
import { ThemeStore } from './themeStore.js'

const STORAGE_KEY = 'theme'
const META_THEME = 'theme-color'

function preferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(preferredTheme)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = theme
    document
      .querySelector(`meta[name="${META_THEME}"]`)
      ?.setAttribute('content', isDark ? '#0a0a0a' : '#ffffff')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <ThemeStore.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
      }}
    >
      {children}
    </ThemeStore.Provider>
  )
}