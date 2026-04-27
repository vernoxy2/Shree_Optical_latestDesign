import React, { useState, useEffect, forwardRef } from "react";
import Slide1 from "../../../Assets/HeroSection/Img1.webp";
import Slide2 from "../../../Assets/HeroSection/Img2.webp";
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
        <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "1.4em", fontWeight: "400" }}>
          Vision
        </span>{" "}
        <br />
        Meets Innovation.
      </>
    ),
    subtitle: "Stylish tortoiseshell glasses with clear nose pads, dual-tone temples, lightweight lenses, and UV-protected, anti-glare vision",
  },
  {
    id: 1,
    BgImag: Slide2,
    position: "object-top",
    title: (
      <>
        Where{" "}
        <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "1.4em", fontWeight: "400" }}>
          Fashion
        </span>{" "}
        <br />
        Meets Function
      </>
    ),
    subtitle: "Stylish tortoiseshell glasses with clear nose pads, dual-tone temples, lightweight lenses, and UV-protected, anti-glare vision enhancement.",
  },
];

const HeroSection = forwardRef((props, ref) => {
  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[500px] sm:h-[480px] md:h-[500px] lg:h-[580px] xl:h-screen max-h-screen overflow-hidden">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {HeaderData.map((item, index) => (
        <img
          key={item.id}
          src={item.BgImag}
          alt="Slider Background"
     className={`absolute inset-0 w-full h-full object-cover object-[90%_center] sm:object-[80%_center] md:object-[80%_center] lg:object-cover transition-opacity duration-1000 ${
  index === current ? "opacity-100" : "opacity-0"
}`}
        />
      ))}

      {/* Dark overlay on mobile for better text readability */}
      <div className="absolute inset-0 z-10 bg-black/30 md:bg-transparent"></div>

      <div className="absolute inset-0 z-20 flex items-center pt-0 md:pt-20 lg:pt-20 xl:pt-0">
        <div className="w-full md:w-full lg:container lg:mx-auto px-6 md:px-6 lg:px-16">
         <div className="max-w-3xl ml-0 md:ml-0 lg:ml-28 xl:ml-40 scale-[0.50] sm:scale-100 origin-left">

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] mb-4 md:mb-6 drop-shadow-lg">
              {HeaderData[current].title}
            </h1>

            <p className="text-white/90 md:text-black font-medium text-sm md:text-lg lg:text-xl leading-relaxed w-full md:w-3/4 lg:w-2/3 mb-6 md:mb-8 drop-shadow-sm">
              {HeaderData[current].subtitle}
            </p>

            <button className="flex items-center gap-3 bg-secondary text-white font-instrument font-bold text-base lg:text-lg px-8 py-4 rounded-sm hover:bg-primary transition-all duration-300 shadow-xl group">
              Visit Now
              <span className="relative w-6 h-6 lg:w-7 lg:h-7 overflow-hidden flex items-center justify-center">
                <img
                  src={FrameIcon}
                  alt="arrow"
                  className="absolute w-6 h-6 lg:w-8 lg:h-8 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
                />
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HeaderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary scale-125" : "bg-white bg-opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;