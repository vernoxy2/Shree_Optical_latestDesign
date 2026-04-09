import React from "react";
import Logo from "../../../../Assets/Footer/Mask group.svg";
import WhiteArrow from "../../../../Assets/Navbar/white arrow.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contact" },
  ];

  const categories = [
    { name: "Eye Glasses", href: "#" },
    { name: "Sun Glasses", href: "#" },
    { name: "Contact Lenses", href: "#" },
    { name: "Computer Glasses", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center cursor-pointer">
              <img
                src={Logo}
                alt="Shree Optical"
                className="h-[90px] md:h-[100px] w-auto object-contain "
              />
            </div>
            <p className="text-gray-400 font-inter text-sm leading-relaxed max-w-xs">
              Quality eyewear for every style and need. We offer trendy frames, sunglasses, and lenses with expert eye care and personalized service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-nunito font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary font-inter transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-xl font-nunito font-bold mb-8 relative inline-block">
              Categories
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-primary font-inter transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-nunito font-bold mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                  123 Vision Street, Optical Plaza, New York, NY 10001
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-400 font-inter text-sm">
                  +1 (234) 567-890<br />
                  +1 (234) 567-891
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-inter">
            &copy; {currentYear} Shree Optical. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-white/5 hover:bg-primary px-6 py-3 rounded-full border border-white/10 transition-all duration-500"
          >
            <span className="text-sm font-instrument font-bold tracking-wide">Back to Top</span>
            <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center bg-white rounded-full">
              <img
                src={WhiteArrow}
                alt="arrow"
                className="absolute w-3 h-3 invert transition-all duration-500 ease-in-out group-hover:-translate-y-5 group-hover:translate-x-5 group-hover:opacity-0"
              />
              <img
                src={WhiteArrow}
                alt="arrow"
                className="absolute w-3 h-3 invert transition-all duration-500 ease-in-out translate-y-5 -translate-x-5 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
    </footer>
  );
};

export default Footer;