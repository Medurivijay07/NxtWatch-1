import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  saveVideos: [],
  toggleTheme: () => {},
  addToSavedVideos: () => {},
})

export default ThemeContext
