import React, { useState } from "react";
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
import LeftArrow from "../../../Assets/EyeGlasses/left black arrow.svg";
import RightArrow from "../../../Assets/EyeGlasses/right black arrow.svg";
import BlackArrow from "../../../Assets/EyeGlasses/black arrow.svg";

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

  const item = glassesData[current];

  return (
    <section className="py-8 md:py-12" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="container">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-bold font-nunito text-secondary mb-8 md:mb-12">
          <span className="text-primary">Eye</span> Glasses
        </h2>

        {/* Outer row — left arrow | panels | right arrow */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300"
            >
            <img src={LeftArrow} alt="Left arrow" className="w-full h-full" />
          </button>



          {/* Two separate panels with gap */}
          <div className="flex-1 flex gap-4 md:gap-6 items-stretch">

            {/* Left Panel — Person Image */}
            <div className="relative w-1/2 overflow-hidden rounded-2xl" style={{ minHeight: "380px" }}>
              <img
                src={item.personImg}
                alt="Person"
                className="w-full h-full object-cover object-top transition-opacity duration-500"
              />
              {/* Dot Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {glassesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                       i === current ? "bg-primary scale-110" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Panel — White box */}
            <div className="w-1/2 bg-white rounded-2xl flex flex-col items-start justify-center px-8 md:px-12 py-8 md:py-10 gap-5">

              {/* Glasses Type */}
              <h3 className="text-primary font-bold font-nunito text-4xl md:text-6xl">
                {item.type}
              </h3>

              {/* Glasses Image */}
              <div className="w-full flex items-center justify-center py-4">
                <img
                  src={item.glassesImg}
                  alt={item.type}
                  className="max-h-[100px] md:max-h-[130px] w-auto object-contain"
                />
              </div>

              {/* Buy Now Button */}
              <button className="flex items-center gap-2 bg-secondary text-white font-instrument font-bold text-sm px-6 py-3 hover:bg-secondary/90 transition-all duration-300">
                Buy Now
                <img src={BlackArrow} alt="arrow" className="w-8 h-8" />
              </button>

            </div>
          </div>

          {/* Right Arrow */}
        <button
            onClick={next}
                className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300"
            >
            <img src={RightArrow} alt="Right arrow" className="w-full h-full" />
        </button>

        </div>
      </div>
    </section>
  );
};

export default EyeGlasses;