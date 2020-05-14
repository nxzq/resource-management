import React, { createContext, useState, useLayoutEffect } from 'react';
import { lightTheme, darkTheme } from './themes';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {

  const themePreference = localStorage.getItem('Theme');
  const [ dark, setDark ] = useState(themePreference ? JSON.parse(themePreference) : false);
  const toggleTheme = () => setDark(!dark);

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  };

  useLayoutEffect(() => {
    applyTheme(dark ? darkTheme : lightTheme);
    localStorage.setItem('Theme', JSON.stringify(dark));
  }, [ dark ]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );

}