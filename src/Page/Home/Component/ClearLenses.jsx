import React from "react";
import LensImg from "../../../Assets/ClearLenses/Aviator sunglasses with gold-tone frame-Photoroom-Recovered 1 (1)-Picsart-AiImageEnhancer.webp";

const ClearLenses = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Heading - Centered */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 style={{ lineHeight: "76.1px", letterSpacing: "0" }}>
            {/* "Clear" — Nunito Sans, Bold, 50.67px */}
            <span
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: "50.67px",
                color: "#FF5656",
              }}
            >
              Clear
            </span>{" "}
            {/* "Lenses" — Nunito Sans, Light, 50.67px */}
            <span
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 300,
                fontSize: "50.67px",
                color: "#1E2A38",
              }}
            >
              Lenses
            </span>
          </h2>
        </div>

        {/* Content Container */}
        <div className="flex justify-end items-center">
          <div className="w-full md:w-1/2 lg:w-[45%] flex justify-end transform hover:scale-105 transition-transform duration-700 ease-in-out">
            <img
              src={LensImg}
              alt="Clear Lenses"
              className="w-full h-auto object-contain drop-shadow-xl"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearLenses;