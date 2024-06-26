import type { Metadata } from "next";
import StyledComponentsRegistry from '../lib/ registry'
import GlobalStyle from '@/config/global.style'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Antd Next14 Boilerplate ',
  description: 'antd next14 boilerplate with styled-component',
  icons: '/favicon.svg'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
