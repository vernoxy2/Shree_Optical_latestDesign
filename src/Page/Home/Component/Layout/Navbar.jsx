import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../../Assets/Navbar/Mask group.svg";
import FrameIcon from "../../../../Assets/Navbar/white arrow.svg";

const Navbar = ({ heroRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 } // triggers the moment hero starts leaving viewport
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

  const getLinkClass = (href) => {
    const base =
      "font-instrument text-[14px] lg:text-[16px] tracking-[2px] transition-all duration-300 hover:text-primary";
    const isActive = location.pathname === href;
    if (isActive) return base + " text-primary font-bold";
    return base + " text-secondary font-normal";
  };

  const getMobileLinkClass = (href) => {
    const base =
      "font-instrument text-xl uppercase tracking-[3px] transition-colors hover:text-primary";
    const isActive = location.pathname === href;
    if (isActive) return base + " text-primary font-bold";
    return base + " text-white font-normal";
  };

  const sidebarClass =
    "fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-secondary transform transition-transform duration-500 ease-in-out z-[60] md:hidden " +
    (menuOpen ? "translate-x-0" : "translate-x-full");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-[80px] lg:h-[96px] flex items-center border-b transition-all duration-300 ${
        heroVisible
          ? "bg-white md:bg-white/10 backdrop-blur-[10px] border-gray-100 md:border-white/5"
          : "bg-white shadow-sm border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] flex items-center justify-between h-full">

        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer shrink-0">
          <img
            src={Logo}
            alt="Shree Optical"
            className="h-[45px] md:h-[55px] lg:h-[63px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto mr-4 lg:mr-6 space-x-10 lg:space-x-12 xl:space-x-14">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={getLinkClass(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Frame Icon */}
        <div className="hidden md:flex items-center shrink-0">
          <button className="cursor-pointer group relative w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] bg-primary rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={FrameIcon}
              alt="Action Icon"
              className="absolute w-8 h-8 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
            />
            <img
              src={FrameIcon}
              alt="Action Icon"
              className="absolute w-8 h-8 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-secondary focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={sidebarClass}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <img
              src={Logo}
              alt="Shree Optical"
              className="h-10 invert brightness-0"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={getMobileLinkClass(link.href)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6">
              <button className="cursor-pointer group relative w-12 h-12 bg-primary rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={FrameIcon}
                  alt="Action Icon"
                  className="absolute w-5 h-5 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
                />
                <img
                  src={FrameIcon}
                  alt="Action Icon"
                  className="absolute w-5 h-5 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </button>
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