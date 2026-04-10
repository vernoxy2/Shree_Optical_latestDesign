import React from "react";
import WhiteArrow from "../../../Assets/ContactUs/white arrow.svg";
import CardBg from "../../../Assets/InquirySection/image 1-Picsart-AiImageEnhancer.webp";
import LocationIcon from "../../../Assets/InquirySection/Frame 97.svg";
import PhoneIcon from "../../../Assets/InquirySection/Frame 98.svg";
import EmailIcon from "../../../Assets/InquirySection/Frame 99.svg";

const Inquiry = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Side — Form */}
          <div className="w-full lg:w-2/3">
            <h2
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "48px",
                lineHeight: "72.1px",
                letterSpacing: "0%",
                margin: "0 0 48px 0",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--color-primary)" }}>
                Get Your Free
              </span>{" "}
              <span style={{ fontWeight: 300, color: "#1E2A38" }}>
                Quote Today!
              </span>
            </h2>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-4 rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white placeholder-gray-900 text-gray-900"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full px-4 py-4 rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white placeholder-gray-900 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-4 py-4 rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white placeholder-gray-900 text-gray-900"
                  required
                />
              </div>

              <div className="w-full">
                <textarea
                  placeholder="Message*"
                  rows="6"
                  className="w-full px-4 py-4 rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white resize-none placeholder-gray-900 text-gray-900"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 bg-secondary text-white font-instrument text-lg px-8 py-4 rounded-sm hover:bg-primary transition-all duration-300 group shadow-lg"
              >
                <span className="font-medium">Send Message</span>
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
            </form>
          </div>

          {/* Right Side — Contact Card */}
          <div className="w-full lg:w-1/3">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ height: "499px" }}
            >
              {/* Background Image */}
              <img
                src={CardBg}
                alt="Contact Information"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70 z-10" />

              {/* Card Content */}
              <div className="relative z-20 p-8 md:p-10 text-white h-full flex flex-col justify-between">

                {/* Top — Title + Divider */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "48px",
                      lineHeight: "34px",
                      margin: "0 0 14px 0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Contact Us
                  </h3>
                  <div className="w-32 h-px bg-white/30 mt-4" />
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src={LocationIcon} alt="Location" className="w-full h-full" />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "130%",
                      letterSpacing: "0%",
                      color: "rgba(255,255,255,0.9)",
                      margin: 0,
                    }}
                  >
                    pramukh sannidhya complex, B-5,
                    Abrama Village, Valsad,
                    Abrama, Gujarat 396002
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src={PhoneIcon} alt="Phone" className="w-full h-full" />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "130%",
                      letterSpacing: "0%",
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    + 91 63558 38127
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src={EmailIcon} alt="Email" className="w-full h-full" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                        color: "#ffffff",
                        margin: 0,
                      }}
                    >
                      Email :<br />
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>
                        sshreeoptical@gmail.com
                      </span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inquiry;