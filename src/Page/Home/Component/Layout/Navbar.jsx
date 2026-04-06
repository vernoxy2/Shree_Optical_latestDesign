import React, { useState } from "react";
import Logo from "../../../../Assets/Navbar/Mask group.svg";
import FrameIcon from "../../../../Assets/Navbar/white arrow.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[70px] md:h-[85px] lg:h-[96px] bg-white/20 backdrop-blur-lg flex items-center border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center cursor-pointer shrink-0">
          <img 
            src={Logo} 
            alt="Shree Optical" 
            className="h-[40px] md:h-[50px] lg:h-[60px] w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center mx-auto space-x-8 lg:space-x-12 xl:space-x-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`font-instrument text-sm lg:text-base uppercase tracking-[2px] transition-all duration-300 hover:text-primary relative group ${
                activeLink === link.name
                  ? "text-primary font-bold"
                  : "text-secondary font-medium"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeLink === link.name ? "w-full" : ""}`} />
            </a>
          ))}
        </div>

        {/* Right Side - Action Button */}
        <div className="hidden md:flex items-center shrink-0">
          <button className="cursor-pointer group relative w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] bg-primary rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-shadow">
            <img
              src={FrameIcon}
              alt="Action Icon"
              className="absolute w-6 h-6 lg:w-7 lg:h-7 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
            />
            <img
              src={FrameIcon}
              alt="Action Icon"
              className="absolute w-6 h-6 lg:w-7 lg:h-7 transition-all duration-500 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-secondary hover:text-primary transition-colors focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-white shadow-2xl transform transition-transform duration-500 ease-out z-[70] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <img src={Logo} alt="Shree Optical" className="h-10" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-secondary hover:text-primary p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { setMenuOpen(false); setActiveLink(link.name); }}
                className={`font-instrument text-2xl uppercase tracking-[2px] py-2 transition-colors border-b border-gray-100 ${
                  activeLink === link.name
                    ? "text-primary font-bold"
                    : "text-secondary font-medium"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 flex justify-center">
              <button className="flex items-center gap-4 bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg">
                GET IN TOUCH
                <img src={FrameIcon} alt="arrow" className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="mt-auto pt-10 text-center text-gray-400 text-sm">
            © 2026 Shree Optical. All rights reserved.
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55] md:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;