import React, { useState, useEffect  } from "react";
import MenImg from "../../../Assets/ShopFor/Mask group (20).webp";
import WomenImg from "../../../Assets/ShopFor/Mask group (21).webp";
import KidsImg from "../../../Assets/ShopFor/Mask group (22).webp";
import SunglassesImg from "../../../Assets/ShopFor/Mask group (23).webp";
import FrameIcon from "../../../Assets/Navbar/white arrow.svg";

const shopItems = [
  { id: 1, name: "Men", img: MenImg },
  { id: 2, name: "Women", img: WomenImg },
  { id: 3, name: "Kids", img: KidsImg },
  { id: 4, name: "Sunglasses", img: SunglassesImg },
];

const Shop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const expandedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section id="products" className="py-12 md:py-20" style={{ backgroundColor: "#FFF5F0" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-nunito inline-block relative">
            <span style={{ color: "#FF5656" }}>Shop</span>{" "}
            <span
              style={{
                fontFamily: "'Nunito sans', sans-serif",
                color: "black",
                fontSize: "1.2em",
                fontWeight: "300",
              }}
            >
              For
            </span>
          </h2>
        </div>

        {/* ── Mobile Vertical Accordion (< xl) ── */}
        <div className="flex flex-col gap-3 xl:hidden">
          {shopItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className="relative cursor-pointer rounded-[22px] overflow-hidden group transition-all duration-700"
                style={{ height: isExpanded ? (isMobile ? "350px" : "670px") : "190px" }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                  style={{ transform: isHovered ? "scale(1.1)" : "scale(1)", pointerEvents: "none", objectPosition: isMobile ? "center -15px" : "center -50px" }}
                />

                {/* Top Right — pink circle with arrow — bigger on tablet */}
                <div className="absolute top-3 right-3 z-20" style={{ pointerEvents: "none" }}>
                  <div className="relative w-[38px] h-[38px] md:w-[70px] md:h-[70px] bg-primary rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src={FrameIcon}
                      alt="Arrow"
                      className="absolute w-5 h-5 md:w-7 md:h-7 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
                    />
                    <img
                      src={FrameIcon}
                      alt="Arrow"
                      className="absolute w-5 h-5 md:w-9 md:h-9 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Pink gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 transition-opacity duration-500"
                  style={{
                    height: "60%",
                    background: "linear-gradient(to top, rgba(255,86,86,0.75) 0%, rgba(255,86,86,0.3) 50%, transparent 100%)",
                    opacity: isHovered ? 0 : 1,
                    pointerEvents: "none",
                  }}
                />

                {/* Default Label */}
                <div
                  className="absolute inset-0 z-10 transition-all duration-500"
                  style={{
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? "translateY(10px)" : "translateY(0)",
                    pointerEvents: "none",
                  }}
                >
                  {isExpanded ? (
                    <div className="absolute inset-0 flex items-end justify-start pb-5 pl-5">
                      <h3 className="text-white font-bold font-nunito text-3xl md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                        {item.name}
                      </h3>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-start pl-5">
                      <h3 className="text-white font-bold font-nunito text-3xl md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                        {item.name}
                      </h3>
                    </div>
                  )}
                </div>

                {/* Hover Content */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-end px-5 pb-5 transition-all duration-500 z-10"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(20px)",
                    pointerEvents: "none",
                    height: "50%",
                  }}
                >
                  <h3 className="text-white font-extrabold font-nunito text-3xl md:text-5xl tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop Accordion (≥ xl) ── */}
        <div className="hidden xl:flex gap-3">
          {shopItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className="relative cursor-pointer rounded-[30px] transition-all duration-700 overflow-hidden group"
                style={{ flex: isExpanded ? 2 : 1 }}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-[30px] h-[480px] xl:h-[580px] 2xl:h-[657px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                    style={{ transform: isHovered ? "scale(1.1)" : "scale(1)", pointerEvents: "none", objectPosition: "center -30px" }}
                  />

                  {/* Top Right — pink circle */}
                  <div className="absolute top-6 right-6 z-20" style={{ pointerEvents: "none" }}>
                    <div className="relative w-[50px] h-[50px] bg-primary rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={FrameIcon}
                        alt="Arrow"
                        className="absolute w-8 h-8 transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
                      />
                      <img
                        src={FrameIcon}
                        alt="Arrow"
                        className="absolute w-8 h-8 transition-all duration-700 ease-in-out translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  {/* Pink gradient */}
                  <div
                    className="absolute bottom-0 left-0 right-0 transition-opacity duration-500"
                    style={{
                      height: "55%",
                      background: "linear-gradient(to top, rgba(255,86,86,0.75) 0%, rgba(255,86,86,0.3) 50%, transparent 100%)",
                      opacity: isHovered ? 0 : 1,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Default Label */}
                  <div
                    className="absolute inset-0 z-10 transition-all duration-500"
                    style={{
                      opacity: isHovered ? 0 : 1,
                      transform: isHovered ? "translateY(10px)" : "translateY(0)",
                      pointerEvents: "none",
                    }}
                  >
                    {isExpanded ? (
                      <div className="absolute inset-0 flex items-end justify-start pb-8 pl-6">
                        <h3 className="text-white font-bold font-nunito text-5xl xl:text-[64px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                          {item.name}
                        </h3>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-end justify-center pb-8">
                        <h3
                          className="text-white font-bold font-nunito text-5xl xl:text-[64px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                          {item.name}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Hover Content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-end px-6 pb-8 transition-all duration-500 z-10"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(20px)",
                      pointerEvents: "none",
                      height: "50%",
                    }}
                  >
                    <h3 className="text-white font-extrabold font-nunito text-5xl xl:text-[64px] tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {shopItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === expandedIndex ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;