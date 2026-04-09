import React from 'react'
import HeroSection from  './Component/HeroSection'
import Shop from './Component/Shop'
import EyeStylishCombo from './Component/EyeStylishCombo'
import AboutUs from './Component/AboutUs'
import Navbar from './Component/Layout/Navbar'
import BrandSupport from './Component/BrandSupport'
import WhychooseUs from './Component/WhychooseUs'
import OurhappyClients from './Component/OurhappyClients'

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
        <div style={{ height: "50px", backgroundColor: "white" }} />
        <OurhappyClients/>
    </div>
  )
}

export default Home