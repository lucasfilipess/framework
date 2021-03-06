import React, { useState, createContext, useEffect } from 'react'
import { APP } from 'config'

export type ThemeProps = 'dark' | 'light'

export type ThemeContextData = {
  theme: ThemeProps
  toggleTheme: () => void
}

const storage = (localStorage.getItem(`${APP}:theme`) as ThemeProps) || 'light'

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(storage)
  const html = document.documentElement

  useEffect(() => {
    if (storage === 'light') html.classList.remove('dark')
    else html.classList.add('dark')
  }, [html])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem(`${APP}:theme`, 'dark')
      html.classList.add('dark')
    } else {
      setTheme('light')
      localStorage.setItem(`${APP}:theme`, 'light')
      html.classList.remove('dark')
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
