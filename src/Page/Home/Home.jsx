import React from 'react'
import HeroSection from  './Component/HeroSection'
import Shop from './Component/Shop'
import EyeStylishCombo from './Component/EyeStylishCombo'
import AboutUs from './Component/AboutUs'
import Navbar from './Component/Layout/Navbar'
import BrandSupport from './Component/BrandSupport'
import WhychooseUs from './Component/WhychooseUs'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <Shop/>
        <EyeStylishCombo />
        <AboutUs/>
        <BrandSupport/>
        <WhychooseUs/>


    </div>
  )
}

export default Home

