import Features from '@/components/home/module/ui/Features'
import Hero from '@/components/home/module/ui/Hero'
import HowItWorks from '@/components/home/module/ui/HowWork'
import Pricing from '@/components/home/module/ui/Pricing'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Pricing/>
    </>
  )
}

export default Home