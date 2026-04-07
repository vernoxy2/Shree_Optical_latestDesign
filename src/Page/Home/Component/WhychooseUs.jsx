import React from "react";
import Icon1W from "../../../Assets/WhychooseUs/Frame 87.svg";
import Icon1P from "../../../Assets/WhychooseUs/Frame 78.svg";
import Icon2W from "../../../Assets/WhychooseUs/Frame 83.svg";
import Icon2P from "../../../Assets/WhychooseUs/Frame 79.svg";
import Icon3W from "../../../Assets/WhychooseUs/Frame 84.svg";
import Icon3P from "../../../Assets/WhychooseUs/Frame 80.svg";
import Icon4W from "../../../Assets/WhychooseUs/Frame 85.svg";
import Icon4P from "../../../Assets/WhychooseUs/Frame 81.svg";
import Icon5W from "../../../Assets/WhychooseUs/Frame 86.svg";
import Icon5P from "../../../Assets/WhychooseUs/Frame 82.svg";

const whyChooseUsData = [
  {
    id: 1,
    title: "State-of-the-art Testing",
    description: "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    whiteIcon: Icon1W,
    pinkIcon: Icon1P,
  },
  {
    id: 2,
    title: "Curated Eyewear Brands",
    description: "Stylish, high-quality eyewear from thoughtfully selected premium brands.",
    whiteIcon: Icon2W,
    pinkIcon: Icon2P,
  },
  {
    id: 3,
    title: "Personalized Consultations Testing",
    description: "Expert guidance tailored to your unique vision and eyewear needs.",
    whiteIcon: Icon3W,
    pinkIcon: Icon3P,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Transparent, competitive prices without compromising quality or service.",
    whiteIcon: Icon5W,
    pinkIcon: Icon5P,
  },
  {
    id: 5,
    title: "Curated Eyewear Brands",
    description: "Thousands of happy customers and glowing reviews - your satisfaction, our priority.",
    whiteIcon: Icon4W,
    pinkIcon: Icon4P,
  },
];

const WhychooseUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400&family=Nunito+Sans:wght@700;900&display=swap');
      `}</style>

      <section className="relative overflow-hidden bg-[#0F0F0F] py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1440&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.94)" }}
        />

        <div
          className="relative z-10 container mx-auto px-4"
          style={{ maxWidth: "1240px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Header Card */}
            <div
              className="p-6 flex flex-col justify-start items-start"
              style={{ minHeight: "340px" }}
            >
              <h2
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "45px",
                  lineHeight: "1.1",
                  color: "white",
                  margin: "0 0 15px 0",
                  whiteSpace: "nowrap",
                }}
              >
                Why Choose Us?
              </h2>

              <p
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#D1D5DB",
                  margin: "0 0 24px 0",
                }}
              >
                Experience the difference with our commitment to vision, style,
                and genuine care trusted by thousands of happy customers.
              </p>

              <div
                style={{
                  width: "190px",
                  height: "3px",
                  backgroundColor: "#FF5656",
                  borderRadius: "9999px",
                }}
              />
            </div>

            {/* Feature Cards */}
            {whyChooseUsData.map((feature) => (
              <div
                key={feature.id}
                className="p-8 bg-white/[0.12] border border-white/10 transition-all duration-700 hover:bg-white/[0.18] hover:border-white/20 flex flex-col items-start group relative overflow-hidden cursor-pointer"
                style={{ minHeight: "360px" }}
              >
                {/* Icon + Title Row */}
                <div className="flex items-center gap-4 mb-8 w-full">
                  <div
                    className="flex-shrink-0 relative"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={feature.whiteIcon}
                      alt={feature.title}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transition: "opacity 0.5s ease",
                      }}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={feature.pinkIcon}
                      alt={feature.title}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transition: "opacity 0.5s ease",
                      }}
                      className="opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <h3
                    className="flex-1"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "1.2",
                      color: "white",
                      margin: 0,
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className="bg-white/10 group-hover:bg-white/60 group-hover:scale-x-110 transition-all duration-500 origin-center"
                  style={{
                    width: "100%",
                    height: "2px",
                    marginBottom: "24px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "white",
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhychooseUs;