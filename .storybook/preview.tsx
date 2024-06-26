import React from 'react'
import GlobalStyle from '../src/config/global.style'
import { ThemeProvider } from '../src/context/ThemeContext'

const withTheme = (StoryFn: any) => {
  return (
    <ThemeProvider>
      <StoryFn />
      <GlobalStyle />
    </ThemeProvider>
  )
} 

export const decorators = [withTheme]