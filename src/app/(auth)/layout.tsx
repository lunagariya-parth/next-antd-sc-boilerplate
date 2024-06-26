import Images from '@/config/images'
import { Flex } from 'antd'
import Image from 'next/image'
import React from 'react'
import { AuthBannerWrap } from '../../components/AuthLayout.styled'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Flex>
      <AuthBannerWrap>
        <Image src={Images.AuthBanner} alt="auth layout " />
      </AuthBannerWrap>
      <div> {children}</div>
    </Flex>
  )
}
