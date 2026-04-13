import React, { forwardRef } from "react";
import BgImg from "../../../Assets/ContactUs-2/Property 1=Variant2-Picsart-AiImageEnhancer.webp";

const HeroSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative w-full h-[400px] sm:h-[550px] lg:h-[700px] overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={BgImg}
          alt="Contact Us Background"
          className="w-full h-full object-cover object-[center_35%] lg:object-center"
        />

        {/* Exact Black Gradient Overlay from Left */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 35%, transparent 70%)"
          }}
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1
              className="text-white font-bold leading-tight tracking-tight"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "68px"
              }}
            >
              Contact <span className="text-primary">Us</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;