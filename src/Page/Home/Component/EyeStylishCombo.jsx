import React from "react";
import EyeGlasses from "./EyeGlasses";
import StylishSunglasses from "./StylishSunglasses";

const EyeStylishCombo = () => {
  return (
    <section className="bg-[#FFFDFB] overflow-hidden">
      {/* Eyeglasses Section */}
      <EyeGlasses />

      {/* Elegant Divider Line - Matching Figma */}
      <div className="container mx-auto px-10 md:px-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Stylish Sunglasses Section */}
      <StylishSunglasses />
    </section>
  );
};

export default EyeStylishCombo;
