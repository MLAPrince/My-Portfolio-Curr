import { createContext, useContext, useEffect, useState } from 'react'

// Create theme context
const ThemeContext = createContext()

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'light'
  })

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    
    // Update document class for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [theme])

  // Context value object
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
