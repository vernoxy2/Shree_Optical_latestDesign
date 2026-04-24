import React, { useState, useEffect, forwardRef } from "react";
import Slide1 from "../../../Assets/HeroSection/Img1.webp";
import Slide2 from "../../../Assets/HeroSection/Img2.webp";
import FrameIcon from "../../../Assets/HeroSection/white arrow.svg";
import Popup from "./Popup";

const HeaderData = [
  {
    id: 0,
    BgImag: Slide1,
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
  },
  {
    id: 1,
    BgImag: Slide2,
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
  },
];

// Desktop Tailwind object-position classes (your originals)
const slideClasses = ["object-center", "object-top"];

// Mobile-only pixel-precise crop per slide
const slideMobileStyles = [
  { objectPosition: "left -200px top 0px" },
  { objectPosition: "left -200px top 40px" },
];

const HeroSection = forwardRef((props, ref) => {
  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[420px] sm:h-[480px] lg:h-screen overflow-hidden">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Slides */}
      {HeaderData.map((item, index) => (
        <img
          key={index}
          src={item.BgImag}
          alt="Slider Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            !isMobile ? slideClasses[index] : ""
          } ${index === current ? "opacity-100" : "opacity-0"}`}
          style={isMobile ? slideMobileStyles[index] : undefined}
        />
      ))}

      {/* Mobile dark overlay — hidden on md+ */}
      <div
        className="absolute inset-0 z-10 md:hidden"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">

          {/* Mobile: w-[58%] to keep text left, desktop: original layout */}
          <div className="w-[58%] md:w-full md:max-w-3xl md:ml-16 lg:ml-28 xl:ml-40">
            <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-bold leading-[1.15] md:leading-[1.1] mb-3 md:mb-6 drop-shadow-lg">
              {HeaderData[current].title}
            </h1>

            <p className="text-white/90 md:text-secondary-dark lg:text-black font-medium text-[11px] md:text-lg lg:text-xl leading-relaxed w-full md:w-3/4 lg:w-2/3 mb-4 md:mb-8 drop-shadow-sm">
              {HeaderData[current].subtitle}
            </p>

            <button className="flex items-center gap-2 md:gap-3 bg-secondary text-white font-instrument font-bold text-xs md:text-base lg:text-lg px-4 md:px-8 py-2.5 md:py-4 rounded-sm hover:bg-primary transition-all duration-300 shadow-xl group whitespace-nowrap">
              Visit Now
              <span className="relative w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 overflow-hidden flex items-center justify-center">
                <img
                  src={FrameIcon}
                  alt="arrow"
                  className="absolute w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
                />
                <img
                  src={FrameIcon}
                  alt="arrow"
                  className="absolute w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {HeaderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary w-4 md:w-5 h-2"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;