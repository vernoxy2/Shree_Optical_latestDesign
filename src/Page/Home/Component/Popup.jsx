import React, { useState, useEffect } from "react";
import Pop1 from "../../../Assets/HeroSection/popup1.webp";
import Pop2 from "../../../Assets/HeroSection/popup2.webp";
import Pop3 from "../../../Assets/HeroSection/popup3.webp";
import Pop4 from "../../../Assets/HeroSection/popup4.webp";
import CloseIcon from "../../../Assets/HeroSection/close.svg";
import ArrowIcon from "../../../Assets/HeroSection/white arrow.svg";

const Popup = ({ onClose }) => {
  const images = [Pop1, Pop2, Pop3, Pop4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = "border border-gray-200 bg-gray-50 text-sm px-4 py-3 focus:outline-none focus:border-primary focus:bg-white font-inter text-secondary placeholder-gray-400 transition-colors duration-200 w-full";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div className="relative rounded-2xl p-[5px] bg-white shadow-2xl w-full max-w-[800px]">

        {/* Inner popup card — row on desktop, column on mobile */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl">

          {/* Image — top on mobile, right on desktop */}
          <div className="relative w-full h-[300px] md:hidden overflow-hidden rounded-t-xl">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                  index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
              >
                <img src={img} alt={`Popup ${index + 1}`} className="w-full h-full object-cover object-top" />
              </div>
            ))}
            {/* Close Button on mobile image */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-[110] w-8 h-8 flex items-center justify-center"
              aria-label="Close popup"
            >
              <img src={CloseIcon} alt="Close" className="w-8 h-8" />
            </button>
          </div>

          {/* Left — Form */}
          <div className="flex flex-col justify-start px-6 py-6 md:px-10 md:py-10 w-full md:w-[55%] bg-white">

            {/* Title */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-3xl md:text-5xl font-bold font-nunito text-primary leading-tight">
                Clarity Meets
              </h2>
              <p
                style={{
                  fontFamily: "'Mr De Haviland', cursive",
                  color: "#1E2A38",
                  fontSize: "3rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginTop: "-1.5rem",
                  marginLeft: "1.5rem"
                }}
                className="pl-[8rem] md:pl-[12.5rem]"
              >
                fashion
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-3">
              <input type="text" name="name" placeholder="Name*" value={form.name} onChange={handleChange} className={inputClass} />
              <input type="email" name="email" placeholder="Email*" value={form.email} onChange={handleChange} className={inputClass} />
              <input type="tel" name="phone" placeholder="Phone Number*" value={form.phone} onChange={handleChange} className={inputClass} />
              <textarea name="message" placeholder="Message*" rows={3} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
              <button className="flex items-center gap-2 bg-secondary text-white font-instrument font-bold text-sm px-6 py-3 w-fit hover:bg-secondary/90 transition-all duration-300 mt-1">
                Send Message
                <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right — Sliding Image (desktop only) */}
          <div className="relative hidden md:block w-[45%] overflow-hidden rounded-xl">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                  index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
              >
                <img src={img} alt={`Popup ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Close Button on desktop image */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-[110] w-8 h-8 flex items-center justify-center"
              aria-label="Close popup"
            >
              <img src={CloseIcon} alt="Close" className="w-8 h-8" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Popup;