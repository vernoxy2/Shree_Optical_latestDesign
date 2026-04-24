import React from "react";
import Logo1 from "../../../Assets/BrandSupport/380651629_648513860707418_28058924703051947_n 1.svg";
import Logo2 from "../../../Assets/BrandSupport/5a1aca8bf65d84088faf1392.svg";
import Logo3 from "../../../Assets/BrandSupport/boss-hugo-boss-logo-black-and-white 1.svg";
import Logo4 from "../../../Assets/BrandSupport/pngegg.svg";
import Logo5 from "../../../Assets/BrandSupport/SCOTT_LOGO_BLACK-sm.svg";

const brands = [
  { id: 1, img: Logo1 },
  { id: 2, img: Logo2 },
  { id: 3, img: Logo3 },
  { id: 4, img: Logo4 },
  { id: 5, img: Logo5 },
];

const BrandSupport = () => {
  return (
    <section className="bg-white overflow-hidden py-10 md:py-16">

      {/* Scrolling marquee text — fluid font size so it never overflows */}
      <div className="w-full overflow-hidden flex items-center" style={{ height: "clamp(60px, 12vw, 122px)" }}>
        <div className="marquee-track">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 8vw, 89.13px)",
                lineHeight: 1.37,
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255, 86, 86, 0.35)",
                whiteSpace: "nowrap",
                paddingRight: "clamp(20px, 4vw, 48px)",
                userSelect: "none",
                pointerEvents: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              BRAND SUPPORT{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "clamp(10px, 1.5vw, 18px)",
                  height: "clamp(10px, 1.5vw, 18px)",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 86, 86, 0.25)",
                  verticalAlign: "middle",
                  marginBottom: "6px",
                }}
              />{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Brand Cards
          mobile  : 1 column, tall cards (130px) stacked vertically
          desktop : 5 columns, original height (107px) side by side        */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group flex items-center justify-center bg-white rounded-[16px] cursor-pointer overflow-hidden h-[107px]"
              style={{
                border: "1.5px solid #E5E5E5",
                transition: "border-color 0.8s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1.5px solid #FF5656";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1.5px solid #E5E5E5";
              }}
            >
              <img
                src={brand.img}
                alt={`Brand logo ${index + 1}`}
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  maxWidth: "180px",
                  maxHeight: "70px",
                  width: "55%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default BrandSupport;
