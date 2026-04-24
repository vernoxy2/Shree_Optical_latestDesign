import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../../Assets/Navbar/Mask group.svg";
import FrameIcon from "../../../../Assets/Navbar/white arrow.svg";

const Navbar = ({ heroRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const location = useLocation();

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!heroRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/" && !location.hash;
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  const getLinkClass = (href) => {
    const base = "font-instrument text-[14px] lg:text-[16px] tracking-[2px] transition-all duration-300 hover:text-primary whitespace-nowrap";
    return isActive(href) ? `${base} text-primary font-bold` : `${base} text-secondary font-normal`;
  };

  // Mobile links — dark text on white bg
  const getMobileLinkClass = (href) => {
    const base = "font-instrument text-lg tracking-[1px] transition-colors hover:text-primary";
    return isActive(href) ? `${base} text-primary font-bold` : `${base} text-secondary font-normal`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 h-[70px] sm:h-[80px] lg:h-[96px] flex items-center border-b transition-all duration-300 ${
          heroVisible
            ? "bg-white md:bg-white/10 md:backdrop-blur-[10px] border-gray-100 md:border-white/5"
            : "bg-white shadow-sm border-gray-100"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer shrink-0">
            <img
              src={Logo}
              alt="Shree Optical"
              className="h-[40px] sm:h-[50px] lg:h-[63px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-14 mx-6 lg:mx-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={getLinkClass(link.href)}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <button className="cursor-pointer group relative w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] bg-primary rounded-full overflow-hidden flex items-center justify-center">
              <img src={FrameIcon} alt="Action" className="absolute w-5 h-5 lg:w-6 lg:h-6 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0" />
              <img src={FrameIcon} alt="Action" className="absolute w-5 h-5 lg:w-6 lg:h-6 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center p-2 -mr-1 text-secondary focus:outline-none"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar — white bg like Figma */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-[60] md:hidden
          transform transition-transform duration-500 ease-in-out shadow-2xl
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">

          {/* Sidebar Header — light gray bg like Figma */}
          <div className="flex justify-between items-center px-6 py-5 bg-gray-100">
            <img src={Logo} alt="Shree Optical" className="h-9 w-auto object-contain" />
            <button onClick={() => setMenuOpen(false)} className="text-secondary p-1" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col px-6 pt-8 gap-7">
            {navLinks.map((link) => {
              const isLastLink = link.name === "Contact Us";
              return (
                <div key={link.name} className="flex items-center gap-3">
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={getMobileLinkClass(link.href)}
                  >
                    {link.name}
                  </Link>

                  {/* Show CTA button inline with Contact Us */}
                  {isLastLink && (
                    <button className="cursor-pointer group relative w-10 h-10 bg-primary rounded-full overflow-hidden flex items-center justify-center shrink-0">
                      <img src={FrameIcon} alt="Action" className="absolute w-4 h-4 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0" />
                      <img src={FrameIcon} alt="Action" className="absolute w-4 h-4 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                  )}
                </div>
              );
            })}
          </nav>

        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;