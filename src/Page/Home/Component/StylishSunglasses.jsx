import React, { useState, useEffect } from "react";
import sgimg1 from "../../../Assets/StylishSunglasses/sgimg1.webp";
import sgimg2 from "../../../Assets/StylishSunglasses/sgimg2.webp";
import sgimg3 from "../../../Assets/StylishSunglasses/sgimg3.webp";
import sgimg4 from "../../../Assets/StylishSunglasses/sgimg4.webp";
import sgimg5 from "../../../Assets/StylishSunglasses/sgimg5.webp";
import sgimg6 from "../../../Assets/StylishSunglasses/sgimg6.webp";
import sunglass1 from "../../../Assets/StylishSunglasses/sunglass1.webp";
import sunglass2 from "../../../Assets/StylishSunglasses/sunglass2.webp";
import sunglass3 from "../../../Assets/StylishSunglasses/sunglass3.webp";
import sunglass4 from "../../../Assets/StylishSunglasses/sunglass4.webp";
import sunglass5 from "../../../Assets/StylishSunglasses/sunglass5.webp";
import sunglass6 from "../../../Assets/StylishSunglasses/sunglass6.webp";
import LeftArrow from "../../../Assets/StylishSunglasses/white left arrow.svg";
import RightArrow from "../../../Assets/StylishSunglasses/white right arrow.svg";
import BlackArrow from "../../../Assets/StylishSunglasses/black arrow.svg";
import WhiteArrow from "../../../Assets/EyeGlasses/white arrow.svg";

const sunglassesData = [
  { id: 0, type: "Aviator",   personImg: sgimg1, glassesImg: sunglass1 },
  { id: 1, type: "Oval",      personImg: sgimg2, glassesImg: sunglass2 },
  { id: 2, type: "Round",     personImg: sgimg3, glassesImg: sunglass3 },
  { id: 3, type: "Square",    personImg: sgimg4, glassesImg: sunglass4 },
  { id: 4, type: "Hexagonal", personImg: sgimg5, glassesImg: sunglass5 },
  { id: 5, type: "Cat Eye",   personImg: sgimg6, glassesImg: sunglass6 },
];

const StylishSunglasses = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + sunglassesData.length) % sunglassesData.length);
  const next = () => setCurrent((c) => (c + 1) % sunglassesData.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % sunglassesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const item = sunglassesData[current];

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-nunito text-secondary mb-10 md:mb-16">
          <span className="text-primary font-bold">Stylish</span> <span className="font-light">Sunglasses</span>
        </h2>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main Content Area - Reversed order on mobile (flex-col-reverse) to keep person on top */}
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-6 md:gap-8">
            
            {/* Left Panel — Info Box */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl flex flex-col items-center lg:items-end justify-center p-8 md:p-12 lg:p-16 gap-8 md:gap-12 shadow-sm relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              
              {/* Glasses Type */}
              <h3 className="text-primary font-black font-nunito text-4xl md:text-5xl lg:text-7xl text-center lg:text-right">
                {item.type}
              </h3>

              {/* Glasses Image */}
              <div className="w-full flex items-center justify-center lg:justify-end py-4 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={item.glassesImg}
                  alt={item.type}
                  className="max-h-[120px] md:max-h-[150px] lg:max-h-[180px] w-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Buy Now Button */}
              <button className="flex items-center gap-3 bg-secondary text-white font-instrument text-lg px-8 py-4 rounded-sm hover:bg-primary transition-all duration-300 group shadow-lg">
                <span className="font-medium">Buy Now</span>
                <span className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
                  <img
                    src={BlackArrow}
                    alt="arrow"
                    className="absolute transition-all duration-500 ease-in-out group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:opacity-0 w-6 h-6"
                  />
                  <img
                    src={BlackArrow}
                    alt="arrow"
                    className="absolute transition-all duration-500 ease-in-out translate-y-6 -translate-x-6 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 w-6 h-6"
                  />
                </span>
              </button>
            </div>

            {/* Right Panel — Person Image */}
            <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl">
              {sunglassesData.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.personImg}
                  alt="Person"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[1000ms] ease-in-out ${
                    index === current ? "opacity-100 scale-105 animate-zoom" : "opacity-0"
                  }`}
                />
              ))}
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 z-[1]" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }}>
                {/* Dot Navigation */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-[2]">
                  {sunglassesData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === current ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-[180px] md:top-[230px] lg:top-1/2 left-0 right-0 lg:-left-20 lg:-right-20 flex justify-between items-center px-2 md:px-4 lg:px-0 pointer-events-none z-30 lg:-translate-y-1/2">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-secondary/80 hover:bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-300 group pointer-events-auto"
            >
              <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center overflow-hidden">
                <img src={LeftArrow} alt="Prev" className="absolute w-5 h-5 md:w-6 md:h-6 transition-all duration-500 group-hover:-translate-x-10 group-hover:opacity-0" />
                <img src={LeftArrow} alt="Prev" className="absolute w-5 h-5 md:w-6 md:h-6 transition-all duration-500 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-secondary/80 hover:bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-300 group pointer-events-auto"
            >
              <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center overflow-hidden">
                <img src={RightArrow} alt="Next" className="absolute w-5 h-5 md:w-6 md:h-6 transition-all duration-500 group-hover:translate-x-10 group-hover:opacity-0" />
                <img src={RightArrow} alt="Next" className="absolute w-5 h-5 md:w-6 md:h-6 transition-all duration-500 -translate-x-10 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StylishSunglasses;