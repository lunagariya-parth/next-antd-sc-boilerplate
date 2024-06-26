'use client'
import { breakpoints } from '@/config/variables'
import styled from 'styled-components'

export const AuthBannerWrap = styled.div`
  display: none;
  @media ${breakpoints.lg} {
    display: block;
    width: 50%;
    height: 100vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
