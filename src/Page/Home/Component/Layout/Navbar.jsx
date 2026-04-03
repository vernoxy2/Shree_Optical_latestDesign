import React, { useState } from 'react'

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* NAVBAR */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "1.8rem", fontWeight: "400", marginRight: "5px" }}>
            Shree
          </span>
          <span style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#000", fontSize: "1.2rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
            OPTICAL
          </span>
        </div>

        {/* Nav Links */}
        <ul style={{
          display: 'flex',
          gap: '40px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
         
        }}>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>AboutUs</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Products</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>ContactUs</a></li>
        </ul>
        

        
      </nav>

      {/* HERO */}
      <section>
        {/* Your hero content here */}
      </section>
    </div>
  )
}

export default HeroSection