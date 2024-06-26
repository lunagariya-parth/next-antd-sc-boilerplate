'use client'
import { useState } from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sidebar from '../../components/Sidebar'
import { Button } from '@/components/Ant/Button'
import { Header } from '@/components/Ant/Header'
import { Footer } from '@/components/Ant/Footer'
import { DashboardLayout } from '../components/DashboardLayout.styled'
import { useTheme } from '@/context/ThemeContext'
import IconHamburger from '@/components/icons/IconHamburger'

export default function DashLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'dark' : 'default')
  }
  return (
    <DashboardLayout>
      <Sidebar isCollapsed={collapsed} />
      <Layout>
        <Header>
          <Button
            shape="circle"
            onClick={() => setCollapsed(!collapsed)}
            icon={<IconHamburger />}
          />
          <Button onClick={toggleTheme}>
            {theme === 'default' ? 'Dark' : 'Light'}
          </Button>
        </Header>
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </DashboardLayout>
  )
}
