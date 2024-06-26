import React from 'react'
import { SidebarWrap } from './Ant/Sider'
import { Flex, Menu } from 'antd'

export default function Sidebar({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <SidebarWrap
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      collapsible
      collapsed={isCollapsed}
    >
      <Flex align="center" justify="space-between" style={{ padding: '16px' }}>
        <h1 className="logo" style={{ color: 'white' }}>
          Logo
        </h1>
      </Flex>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            label: 'nav 1'
          },
          {
            key: '2',
            label: 'nav 2'
          },
          {
            key: '3',
            label: 'nav 3'
          }
        ]}
      />
    </SidebarWrap>
  )
}
