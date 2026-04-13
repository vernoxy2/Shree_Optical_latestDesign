import React, { useRef } from 'react'
import Navbar from '../Home/Component/Layout/Navbar'
import HeroSection from './Component/HeroSection'
import BrandSection from './Component/BrandSection'
import Inquiry from './Component/Inquiry'
import Map from './Component/Map'
import Footer from '../Home/Component/Layout/Footer'

const ContactUs = () => {
  const heroRef = useRef(null);

  return (
    <div>
      <Navbar heroRef={heroRef} />
      <HeroSection ref={heroRef} />
      <BrandSection />
      <Inquiry />
      <Map />
      <Footer />
    </div>
  )
}

export default ContactUs