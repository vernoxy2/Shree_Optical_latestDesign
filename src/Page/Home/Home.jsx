import React from 'react'
import HeroSection from './Component/HeroSection'
import Shop from './Component/Shop'
import EyeStylishCombo from './Component/EyeStylishCombo'
import AboutUs from './Component/AboutUs'
import Navbar from './Component/Layout/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <Shop/>
        <EyeStylishCombo />
        <AboutUs/>

      
    </div>
  )
}

export default Home
