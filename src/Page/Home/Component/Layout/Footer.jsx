import React from "react";
import Logo from "../../../../Assets/Footer/Mask group.svg";
import WhiteArrow from "../../../../Assets/Navbar/white arrow.svg";
import FooterBg from "../../../../Assets/Footer/ChatGPT Image Jan 29, 2026, 04_27_45 PM 1-Picsart-AiImageEnhancer.webp";
import LocationIcon from "../../../../Assets/Footer/Frame 97.svg";
import PhoneIcon from "../../../../Assets/Footer/Frame 98.svg";
import EmailIcon from "../../../../Assets/Footer/Frame 99.svg";
import FacebookIcon from "../../../../Assets/Footer/facebook.svg";
import InstaIcon from "../../../../Assets/Footer/insta.svg";
import TwitterIcon from "../../../../Assets/Footer/twitter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const categories = [
    { name: "Eye Glasses", href: "#" },
    { name: "Sun Glasses", href: "#" },
    { name: "Contact Lenses", href: "#" },
    { name: "Computer Glasses", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/share/1DL1tdAPLj/", icon: FacebookIcon },
    { name: "Instagram", href: "https://www.instagram.com/sshree.optical?igsh=MWVjdXAxMmw1ZDB2YQ==", icon: InstaIcon },
    { name: "Twitter", href: "https://x.com/Shree_optical", icon: TwitterIcon },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={FooterBg}
          alt="Footer Background"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center cursor-pointer">
              <img
                src={Logo}
                alt="Shree Optical"
                className="h-[90px] md:h-[100px] w-auto object-contain invert brightness-0"
              />
            </div>
            <p className="text-gray-400 font-poppins font-normal max-w-xs" style={{ fontSize: "15.83px", lineHeight: "130%", letterSpacing: "0%" }}>
              <span className="font-bold text-white">Shree Optical</span> offers stylish eyewear, sunglasses, lenses, and eyeglasses with modern designs, premium quality, fashion-forward trends, and customer focused service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group overflow-hidden"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 invert brightness-0 group-hover:scale-110 transition-transform duration-300" />
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
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <img src={LocationIcon} alt="Location" className="w-full h-full" />
                </div>
                <p className="text-gray-400 font-inter text-sm leading-relaxed self-center">
                  pramukh sannidhya complex, B-5, Abrama Village, Valsad, Gujarat 396002
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <img src={PhoneIcon} alt="Phone" className="w-full h-full" />
                </div>
                <p className="text-gray-400 font-inter text-sm self-center">
                  +91 63558 38127
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <img src={EmailIcon} alt="Email" className="w-full h-full" />
                </div>
                <p className="text-gray-400 font-inter text-sm self-center">
                  sshreeoptical@gmail.com
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
    </footer>
  );
};

export default Footer;