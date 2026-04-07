import React, { useState, useEffect } from "react";
import img1 from "../../../Assets/EyeGlasses/img1.webp";
import img2 from "../../../Assets/EyeGlasses/img2.webp";
import img3 from "../../../Assets/EyeGlasses/img3.webp";
import img4 from "../../../Assets/EyeGlasses/img4.webp";
import img5 from "../../../Assets/EyeGlasses/img5.webp";
import img6 from "../../../Assets/EyeGlasses/img6.webp";
import glass1 from "../../../Assets/EyeGlasses/glass1.webp";
import glass2 from "../../../Assets/EyeGlasses/glass2.webp";
import glass3 from "../../../Assets/EyeGlasses/glass3.webp";
import glass4 from "../../../Assets/EyeGlasses/glass4.webp";
import glass5 from "../../../Assets/EyeGlasses/glass5.webp";
import glass6 from "../../../Assets/EyeGlasses/glass6.webp";
import LeftArrow from "../../../Assets/EyeGlasses/white left arrow.svg";
import RightArrow from "../../../Assets/EyeGlasses/white right arrow.svg";
import BlackArrow from "../../../Assets/EyeGlasses/black arrow.svg";
import WhiteArrow from "../../../Assets/EyeGlasses/white arrow.svg";

const glassesData = [
  { id: 0, type: "Round",    personImg: img1, glassesImg: glass1 },
  { id: 1, type: "Square",   personImg: img2, glassesImg: glass2 },
  { id: 2, type: "Cat Eye",  personImg: img3, glassesImg: glass3 },
  { id: 3, type: "Oval",     personImg: img4, glassesImg: glass4 },
  { id: 4, type: "Aviator",  personImg: img5, glassesImg: glass5 },
  { id: 5, type: "Wayfarer", personImg: img6, glassesImg: glass6 },
];

const EyeGlasses = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + glassesData.length) % glassesData.length);
  const next = () => setCurrent((c) => (c + 1) % glassesData.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % glassesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const item = glassesData[current];

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-nunito text-secondary mb-10 md:mb-16">
          <span className="text-primary font-bold">Eye</span> <span className="font-light">Glasses</span>
        </h2>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8">
            
            {/* Left Panel — Person Image */}
            <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl">
              {glassesData.map((slide, index) => (
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
                  {glassesData.map((_, i) => (
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

            {/* Right Panel — Info Box */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl flex flex-col items-center lg:items-start justify-center p-8 md:p-12 lg:p-16 gap-8 md:gap-12 shadow-sm relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              
              {/* Glasses Type */}
              <h3 className="text-primary font-black font-nunito text-4xl md:text-5xl lg:text-7xl text-center lg:text-left">
                {item.type}
              </h3>

              {/* Glasses Image */}
              <div className="w-full flex items-center justify-center lg:justify-start py-4 transform hover:scale-105 transition-transform duration-500">
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
                    src={WhiteArrow}
                    alt="arrow"
                    className="absolute transition-all duration-500 ease-in-out group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:opacity-0 w-6 h-6"
                  />
                  <img
                    src={WhiteArrow}
                    alt="arrow"
                    className="absolute transition-all duration-500 ease-in-out translate-y-6 -translate-x-6 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 w-6 h-6"
                  />
                </span>
              </button>
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

export default EyeGlasses;