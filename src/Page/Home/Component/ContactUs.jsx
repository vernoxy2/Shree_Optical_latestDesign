import React from "react";
import BgImg from "../../../Assets/ContactUs/bgimg.webp";
import WhiteArrow from "../../../Assets/ContactUs/white arrow.svg";

const ContactUs = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="relative w-full min-h-[320px] md:min-h-[400px] lg:min-h-[550px] flex items-center">

        {/* Full Background Image */}
        <img
          src={BgImg}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Left fade overlay so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #FFF5F0 30%, #FFF5F055 65%, transparent 100%)",
          }}
        />

        {/* Text Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-28 py-16 max-w-xxl">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-nunito mb-6">
            <span className="text-primary font-bold">Contact</span>{" "}
            <span className="text-secondary font-light">Us</span>
          </h2>

          {/* Subtitle */}
          <p className="text-secondary text-lg leading-relaxed mb-8" style={{ maxWidth: "450px" }}>
            Quality eyewear for every style and need. We offer trendy frames,
            sunglasses, and lenses with expert eye care, personalized service,
            and comfort to help you see clearly.
          </p>

          {/* Get a Quote Button */}
          <button className="flex items-center gap-3 bg-secondary text-white font-instrument font-bold text-base lg:text-lg px-8 py-4 rounded-sm hover:bg-primary transition-all duration-300 shadow-xl group">
            <span className="font-medium">Get a Quote</span>
            <span className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
              <img
                src={WhiteArrow}
                alt="arrow"
                className="absolute w-5 h-5 transition-all duration-500 ease-in-out group-hover:-translate-y-5 group-hover:translate-x-5 group-hover:opacity-0"
              />
              <img
                src={WhiteArrow}
                alt="arrow"
                className="absolute w-5 h-5 transition-all duration-500 ease-in-out translate-y-5 -translate-x-5 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;