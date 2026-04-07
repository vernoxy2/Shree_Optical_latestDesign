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
    description:
      "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    whiteIcon: Icon1W,
    pinkIcon: Icon1P,
  },
  {
    id: 2,
    title: "Curated Eyewear Brands",
    description:
      "Stylish, high-quality eyewear from thoughtfully selected premium brands.",
    whiteIcon: Icon2W,
    pinkIcon: Icon2P,
  },
  {
    id: 3,
    title: "Personalized Consultations",
    description:
      "Expert guidance tailored to your unique vision and eyewear needs.",
    whiteIcon: Icon3W,
    pinkIcon: Icon3P,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description:
      "Transparent, competitive prices without compromising quality or service.",
    whiteIcon: Icon5W,
    pinkIcon: Icon5P,
  },
  {
    id: 5,
    title: "Trusted by Thousands",
    description:
      "Thousands of happy customers and glowing reviews - your satisfaction, our priority.",
    whiteIcon: Icon4W,
    pinkIcon: Icon4P,
  },
];

const WhychooseUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400&family=Nunito+Sans:wght@700;900&display=swap');

        .why-card {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: background-color 0.5s ease, border-color 0.5s ease, transform 0.4s ease;
          min-height: 360px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform: scale(1);
        }

        .why-card:hover {
          background-color: #ffffff;
          border-color: #E5E7EB;
          transform: scale(1.03);
        }

        .why-card .card-title {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 700;
          font-size: 22px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0;
          flex: 1;
          transition: color 0.4s ease;
        }

        .why-card:hover .card-title {
          color: #FF5656;
        }

        .why-card .card-divider {
          width: 100%;
          height: 2px;
          margin-bottom: 24px;
          position: relative;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .why-card .card-divider::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background-color: #FF5656;
          transition: width 0.6s ease;
        }

        .why-card:hover .card-divider::after {
          width: 100%;
        }

        .why-card .card-description {
          font-family: 'Instrument Sans', sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 26px;
          color: #ffffff;
          margin: 0;
          transition: color 0.4s ease;
        }

        .why-card:hover .card-description {
          color: #111827;
        }

        .why-card .icon-white {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.4s ease;
          opacity: 1;
        }

        .why-card:hover .icon-white {
          opacity: 0;
        }

        .why-card .icon-pink {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.4s ease;
          opacity: 0;
        }

        .why-card:hover .icon-pink {
          opacity: 1;
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#0F0F0F] py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1440&q=80')",
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
              <div key={feature.id} className="why-card">

                {/* Icon + Title Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "32px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      position: "relative",
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    <img
                      src={feature.whiteIcon}
                      alt={feature.title}
                      className="icon-white"
                    />
                    <img
                      src={feature.pinkIcon}
                      alt={feature.title}
                      className="icon-pink"
                    />
                  </div>

                  <h3 className="card-title">{feature.title}</h3>
                </div>

                {/* Divider */}
                <div className="card-divider" />

                {/* Description */}
                <p className="card-description">{feature.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default WhychooseUs;