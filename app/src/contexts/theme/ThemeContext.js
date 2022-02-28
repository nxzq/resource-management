import React, { createContext, useState, useLayoutEffect } from 'react'
import { lightTheme, darkTheme } from './themes'

export const ThemeContext = createContext()

const getInitialTheme = () => {
  const themePreference = localStorage.getItem('dark')
  if (themePreference) return !!JSON.stringify(themePreference)
  else {
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) return true
    return false
  }
}

export default function ThemeContextProvider(props) {
  const [dark, setDark] = useState(getInitialTheme())
  const toggleTheme = () => setDark(!dark)

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName('html')[0]
    root.style.cssText = theme.join(';')
  }

  useLayoutEffect(() => {
    applyTheme(dark ? darkTheme : lightTheme)
    localStorage.setItem('dark', JSON.stringify(dark))
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
