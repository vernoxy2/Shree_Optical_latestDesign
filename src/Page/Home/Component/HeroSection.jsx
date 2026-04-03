import React, { useState, useEffect } from "react";
import Slide1 from "../../../Assets/HeroSection/Img1.webp";
import Slide2 from "../../../Assets/HeroSection/Img2.webp";
//import Slide3 from "../../../Assets/HomePage/HomeSliderImg/slider-3.png";
import FrameIcon from "../../../Assets/HeroSection/Frame 60.svg";

const HeaderData = [
  {
    id: 0,
    BgImag: Slide1,
    position: "object-center",  // female — show full body centered
  title: (
  <>
    Where{" "}
    <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "2em" , fontWeight: "400"}}>
      Vision
    </span>{" "}<br></br>
    Meets Innovation.
  </>
),
    subtitle:
      "Stylish tortoiseshell glasses with clear nose pads, dual-tone temples, lightweight lenses, and UV-protected, anti-glare vision enhancement.",
  },
  {
    id: 1,
    BgImag: Slide2,
    position: "object-top",     // male — anchor to top so hair doesn't cut
     title: (
  <>
    Where{" "}
    <span style={{ fontFamily: "'Mr De Haviland', cursive", color: "#FF5656", fontSize: "2em" , fontWeight: "400" }}>
      Vision
    </span>{" "}<br></br>
    Meets Innovation.
  </>
),
    subtitle:
      "Stylish tortoiseshell glasses with clear nose pads, dual-tone temples, lightweight lenses, and UV-protected, anti-glare vision enhancement.",
  },
 
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play: advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[480px] lg:h-[680px] overflow-hidden ">

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
      <div className="absolute inset-0 z-20 flex items-center container w-[100%] ">
        <div className="2xl:pr-16 max-w-2xl ">
          <h1 className="text-white text-xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {HeaderData[current].title}
          </h1>
          {/* Red divider line */}
          
         <p className="!text-black !font-normal text-xs md:text-base lg:text-lg leading-relaxed w-6/12">
          {HeaderData[current].subtitle}
        </p>

        {/* Visit Now Button */}
        <button className="mt-6 flex items-center gap-3 bg-primary text-white font-instrument font-bold text-sm lg:text-base px-8 py-3 hover:bg-primary/90 transition-all duration-300">
          Visit Now
          <img src={FrameIcon} alt="arrow" className="w-8 h-8" />
        </button>

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