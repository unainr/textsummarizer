import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { LayoutProps } from '@/types'
import React from 'react'

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout