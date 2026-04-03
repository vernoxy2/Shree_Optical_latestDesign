import React from 'react'
import HeroSection from  './Component/HeroSection'
import AboutUs from './Component/AboutUs'
import Navbar from './Component/Layout/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <AboutUs/>

      
    </div>
  )
}

export default Home
