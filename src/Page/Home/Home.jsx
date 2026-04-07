import React from 'react'
import HeroSection from  './Component/HeroSection'
import Shop from './Component/Shop'
import EyeStylishCombo from './Component/EyeStylishCombo'
import AboutUs from './Component/AboutUs'
import Navbar from './Component/Layout/Navbar'
import BrandSupport from './Component/BrandSupport'
import WhychooseUs from './Component/WhychooseUs'
import ContactUs from './Component/ContactUs'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <Shop/>
        <BrandSupport/>
        <EyeStylishCombo />
        <AboutUs/>
        
        <WhychooseUs/>
        <ContactUs/>


    </div>
  )
}

export default Home

