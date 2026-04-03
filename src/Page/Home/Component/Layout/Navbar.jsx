import React, { useState } from "react";
import Logo from "../../../../Assets/Navbar/Mask group.svg";
import FrameIcon from "../../../../Assets/Navbar/Frame 59.svg";

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
    <nav className="fixed top-0 left-0 w-full z-50 h-[80px] lg:h-[96px] bg-white/10 backdrop-blur-[10px] flex items-center border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-8 lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center cursor-pointer shrink-0">
          <img 
            src={Logo} 
            alt="Shree Optical" 
            className="h-[45px] md:h-[55px] lg:h-[63px] w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto mr-4 lg:mr-6 space-x-10 lg:space-x-12 xl:space-x-14">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`font-instrument text-[14px] lg:text-[16px] tracking-[2px] transition-all duration-300 hover:text-primary ${
                activeLink === link.name
                  ? "text-primary font-bold"
                  : "text-secondary font-normal"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side - SVG Only */}
        <div className="hidden md:flex items-center shrink-0">
          <button className="cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src={FrameIcon} 
              alt="Action Icon" 
              className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]" 
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-secondary transform transition-transform duration-500 ease-in-out z-[60] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <img src={Logo} alt="Shree Optical" className="h-10 invert brightness-0" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { setMenuOpen(false); setActiveLink(link.name); }}
                className={`font-instrument text-xl uppercase tracking-[3px] transition-colors hover:text-primary ${
                  activeLink === link.name
                    ? "text-primary font-bold"
                    : "text-white font-normal"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
               <img src={FrameIcon} alt="Action Icon" className="w-12 h-12" />
            </div>
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