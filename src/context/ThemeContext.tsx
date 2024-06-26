'use client'
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ConfigProvider } from 'antd'
import { themes } from '@/config/variables'
import { componentTokens, globalTokens } from '@/config/themeVariables'

type ThemeContextType = [
  keyof typeof themes,
  Dispatch<SetStateAction<keyof typeof themes>>
]
const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>(
    () => 'default'
  )

  useEffect(() => {
    const storedTheme = localStorage.getItem('data-theme') || 'default'
    setThemeColor(storedTheme === 'default' ? 'default' : 'dark')
  }, [])

  const value = useMemo<ThemeContextType>(
    () => [themeColor, setThemeColor],
    [themeColor]
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor)
    localStorage.setItem('data-theme', themeColor)
  }, [themeColor])

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          token: globalTokens,
          components: componentTokens,
          cssVar: true,
          hashed: false
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Invalid hook call')
  }
  return context
}
