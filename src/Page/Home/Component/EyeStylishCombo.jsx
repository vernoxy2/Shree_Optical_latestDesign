import React from "react";
import EyeGlasses from "./EyeGlasses";
import StylishSunglasses from "./StylishSunglasses";

const EyeStylishCombo = () => {
  return (
    <section className="bg-[#FFF5F0] overflow-hidden">
      {/* Eyeglasses Section */}
      <EyeGlasses />

      {/* Elegant Divider Line - Matching Figma */}
      <div className="container mx-auto px-4 lg:px-12 py-8">
        <div className="w-full border-t border-gray-200/60 shadow-sm" />
      </div>

      {/* Stylish Sunglasses Section */}
      <StylishSunglasses />
    </section>
  );
};

export default EyeStylishCombo;
