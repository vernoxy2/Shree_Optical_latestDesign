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
    <section className="bg-white overflow-hidden py-16">

      {/* Scrolling marquee text */}
      <div
        style={{
          width: "100%",
          height: "122px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="marquee-track">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 900,
                fontSize: "89.13px",
                lineHeight: "122px",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255, 86, 86, 0.35)",
                whiteSpace: "nowrap",
                paddingRight: "48px",
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
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 86, 86, 0.25)",
                  verticalAlign: "middle",
                  marginBottom: "8px",
                }}
              />{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Brand Cards Row */}
      <div className="container flex items-center justify-between gap-4 py-12">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className="group flex items-center justify-center bg-white rounded-[16px] cursor-pointer overflow-hidden flex-1"
            style={{
              height: "107px",
              border: "1.5px solid #E5E5E5",
              transition: "border-color 0.8s ease, box-shadow 0.8s ease",
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
              className="object-contain group-hover:scale-110"
              style={{
                maxWidth: "140px",
                maxHeight: "70px",
                transition: "transform 0.8s ease",
              }}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default BrandSupport;