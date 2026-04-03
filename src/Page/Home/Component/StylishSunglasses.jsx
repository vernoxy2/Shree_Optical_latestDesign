import React, { useState } from "react";

// Replace with your actual imports
// import Person1 from "../../../Assets/Sunglasses/person1.png";
// import Glasses1 from "../../../Assets/Sunglasses/aviator.png";

const sunglassesData = [
  {
    id: 0,
    type: "Aviator",
    personImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    glassesImg: "https://images.unsplash.com/photo-1511499767390-a73359580bc1?w=300&h=150&fit=crop",
  },
  {
    id: 1,
    type: "Wayfarer",
    personImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    glassesImg: "https://images.unsplash.com/photo-1511499767390-a73359580bc1?w=300&h=150&fit=crop",
  },
  {
    id: 2,
    type: "Sporty",
    personImg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face",
    glassesImg: "https://images.unsplash.com/photo-1511499767390-a73359580bc1?w=300&h=150&fit=crop",
  },
  {
    id: 3,
    type: "Retro",
    personImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    glassesImg: "https://images.unsplash.com/photo-1511499767390-a73359580bc1?w=300&h=150&fit=crop",
  },
  {
    id: 4,
    type: "Shield",
    personImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    glassesImg: "https://images.unsplash.com/photo-1511499767390-a73359580bc1?w=300&h=150&fit=crop",
  },
];

const StylishSunglasses = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + sunglassesData.length) % sunglassesData.length);
  const next = () => setCurrent((c) => (c + 1) % sunglassesData.length);

  const item = sunglassesData[current];

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="container">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold font-nunito text-secondary mb-8 md:mb-12">
          <span className="text-primary">Stylish</span> Sunglasses
        </h2>

        {/* Outer row — arrows + white card */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* White Container Card — content left, image right */}
          <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row-reverse" style={{ minHeight: "380px" }}>

              {/* Right — Person Image (reversed so it appears on right) */}
              <div className="relative w-full md:w-1/2 h-[280px] md:h-auto">
                <img
                  src={item.personImg}
                  alt="Person"
                  className="w-full h-full object-cover object-top transition-opacity duration-500"
                />
                {/* Dot Navigation over image */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {sunglassesData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === current ? "bg-primary scale-110" : "bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Left — White card content */}
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-8 md:px-12 py-8 md:py-10 gap-5">

                {/* Glasses Type */}
                <h3 className="text-primary font-bold font-nunito text-3xl md:text-5xl">
                  {item.type}
                </h3>

                {/* Glasses Image */}
                <div className="w-full flex items-center justify-center py-4">
                  <img
                    src={item.glassesImg}
                    alt={item.type}
                    className="max-h-[100px] md:max-h-[120px] w-auto object-contain"
                  />
                </div>

                {/* Buy Now Button */}
                <button className="flex items-center gap-2 bg-secondary text-white font-instrument font-bold text-sm px-6 py-3 hover:bg-secondary/90 transition-all duration-300">
                  Buy Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>

              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default StylishSunglasses;