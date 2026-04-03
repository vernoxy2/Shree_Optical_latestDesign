import React from 'react'
import HeroSection from  './Component/HeroSection'
import Shop from './Component/Shop'
import AboutUs from './Component/AboutUs'
import Navbar from './Component/Layout/Navbar'
import BrandSupport from './Component/BrandSupport'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <Shop/>
        <AboutUs/>
        <BrandSupport/>


    </div>
  )
}

export default Home

