import React, { useState, useEffect } from "react";
import Slide1 from "../../../Assets/HeroSection/Img1.webp";
import Slide2 from "../../../Assets/HeroSection/Img2.webp";
//import Slide3 from "../../../Assets/HomePage/HomeSliderImg/slider-3.png";
import FrameIcon from "../../../Assets/HeroSection/white arrow.svg";
import Popup from "./Popup";

const HeaderData = [
  {
    id: 0,
    BgImag: Slide1,
    position: "object-center",
    title: (
      <>
        Where{" "}
        <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "2em", fontWeight: "400" }}>
          Vision
        </span>{" "}<br />
        Meets Innovation.
      </>
    ),
    subtitle: "Stylish tortoiseshell glasses with clear nose pads, dual-tone temples, lightweight lenses, and UV-protected, anti-glare vision",
    textOffset: "ml-20",  // slide 1 — text sits just after wood panel
  },
  {
    id: 1,
    BgImag: Slide2,
    position: "object-top",
    title: (
      <>
        Where{" "}
        <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "2em", fontWeight: "400" }}>
          Fashion
        </span>{" "}<br />
        Meets Function
      </>
    ),
    subtitle: "Stylish tortoiseshell glasses with clear nose pads, dual-tone temples, lightweight lenses, and UV-protected, anti-glare vision enhancement.",
    textOffset: "ml-20",  // slide 2 — no wood, less offset
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  // Auto-play: advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[480px] lg:h-screen overflow-hidden">
      {/* Show Popup on Load */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Background Images */}
      {HeaderData.map((item, index) => (
        <img
          key={item.id}
          src={item.BgImag}
          alt="Slider Background"
          className={`absolute inset-0 w-full h-full object-cover ${item.position} transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}

      {/* Text Content — left-aligned, matches image */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl md:ml-40">
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-lg">
              {HeaderData[current].title}
            </h1>
            
            <p className="text-secondary-dark md:text-black font-medium text-sm md:text-lg lg:text-xl leading-relaxed w-full md:w-3/4 lg:w-2/3 mb-8 drop-shadow-sm">
              {HeaderData[current].subtitle}
            </p>

            {/* Visit Now Button */}
            <button className="flex items-center gap-3 bg-secondary text-white font-instrument font-bold text-base lg:text-lg px-8 py-4 rounded-sm hover:bg-primary transition-all duration-300 shadow-xl group">
              Visit Now
              <span className="relative w-6 h-6 lg:w-7 lg:h-7 overflow-hidden flex items-center justify-center">
                {/* exits top-right */}
                <img
                  src={FrameIcon}
                  alt="arrow"
                  className="absolute w-6 h-6 lg:w-8 lg:h-8 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
                />
                {/* enters from bottom-left */}
                <img
                  src={FrameIcon}
                  alt="arrow"
                  className="absolute w-6 h-6 lg:w-8 lg:h-8 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HeaderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary scale-125"
                : "bg-white bg-opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;