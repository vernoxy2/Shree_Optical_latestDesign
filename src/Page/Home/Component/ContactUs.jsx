import React from "react";
import BgImg from "../../../Assets/ContactUs/bgimg.webp";
import WhiteArrow from "../../../Assets/ContactUs/white arrow.svg";

const ContactUs = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="relative w-full min-h-[380px] md:min-h-[400px] lg:min-h-[550px] flex items-start">

        {/* Image — custom object-position to frame the glasses on the right */}
        <img
          src={BgImg}
          alt="Contact Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectPosition: "80% 20%" }}
        />

        {/* Light left fade for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #FFF5F0cc 0%, #FFF5F099 35%, #FFF5F044 55%, transparent 75%)",
          }}
        />

        {/* Text Content */}
        <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-28 pt-10 pb-10 max-w-[55%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[500px]">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-nunito mb-4 sm:mb-6">
            <span className="text-primary font-bold">Contact</span>{" "}
            <span className="text-secondary font-light">Us</span>
          </h2>

          <p className="text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Quality eyewear for every style and need. We offer trendy frames,
            sunglasses, and lenses with expert eye care, personalized service,
            and comfort to help you see clearly.
          </p>

          <button className="flex items-center gap-2 sm:gap-3 bg-secondary text-white font-instrument font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-primary transition-all duration-300 shadow-xl group whitespace-nowrap">
            <span className="font-medium">Get a Quote</span>
            <span className="relative w-5 h-5 sm:w-6 sm:h-6 overflow-hidden flex items-center justify-center">
              <img
                src={WhiteArrow}
                alt="arrow"
                className="absolute w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ease-in-out group-hover:-translate-y-5 group-hover:translate-x-5 group-hover:opacity-0"
              />
              <img
                src={WhiteArrow}
                alt="arrow"
                className="absolute w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ease-in-out translate-y-5 -translate-x-5 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;