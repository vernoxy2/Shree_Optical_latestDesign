import React, { useState, useRef } from "react";
import clientImg1 from "../../../Assets/OurhappyClients/Gemini_Generated_Image_qlfgf2qlfgf2qlfg 1 (1)-Picsart-AiImageEnhancer.webp";
import clientImg2 from "../../../Assets/EyeGlasses/img1.webp";
import clientImg3 from "../../../Assets/EyeGlasses/img2.webp";

const testimonials = [
  {
    id: 1,
    img: clientImg2,
    name: "Rahul Sharma",
    role: "Local Guide",
    rating: 4.5,
    text1: "Shree Optical have an incredible selection of frames and lenses, catering to various styles and needs. The optician was incredibly knowledgeable and helped me find the perfect pair of glasses that not only fit my prescription but also matched my style preferences. Their attention to detail and willingness to go the extra mile truly impressed me.",
    text2: "I highly recommend Shree Optical for anyone in search of quality eyewear and exceptional service. I'll definitely be returning for any future optical needs!",
  },
  {
    id: 2,
    img: clientImg1,
    name: "Srushti Patel",
    role: "Local Guide",
    rating: 4.5,
    text1: "Shree Optical have an incredible selection of frames and lenses, catering to various styles and needs. The optician was incredibly knowledgeable and helped me find the perfect pair of glasses that not only fit my prescription but also matched my style preferences. Their attention to detail and willingness to go the extra mile truly impressed me.",
    text2: "I highly recommend Shree Optical for anyone in search of quality eyewear and exceptional service. I'll definitely be returning for any future optical needs!",
  },
  {
    id: 3,
    img: clientImg3,
    name: "Priya Mehta",
    role: "Regular Customer",
    rating: 4.5,
    text1: "Shree Optical have an incredible selection of frames and lenses, catering to various styles and needs. The optician was incredibly knowledgeable and helped me find the perfect pair of glasses that not only fit my prescription but also matched my style preferences. Their attention to detail and willingness to go the extra mile truly impressed me.",
    text2: "I highly recommend Shree Optical for anyone in search of quality eyewear and exceptional service. I'll definitely be returning for any future optical needs!",
  },
  {
    id: 4,
    img: clientImg2,
    name: "Amit Verma",
    role: "Verified Buyer",
    rating: 5,
    text1: "Amazing experience at Shree Optical! The staff was very friendly and professional. They have a huge variety of frames to choose from and the prices are very reasonable. The eye test was thorough and accurate.",
    text2: "Got my glasses within 2 days and the quality is outstanding. Will definitely recommend to all my friends and family!",
  },
  {
    id: 5,
    img: clientImg1,
    name: "Neha Joshi",
    role: "Regular Customer",
    rating: 4,
    text1: "I've been coming to Shree Optical for the past 3 years and they never disappoint. The team is always up to date with the latest trends in eyewear and they always help me pick the best frames for my face shape.",
    text2: "The lens quality is top notch and my glasses are always ready on time. Highly satisfied with their service every single time!",
  },
  {
    id: 6,
    img: clientImg3,
    name: "Ravi Patel",
    role: "Local Guide",
    rating: 4.5,
    text1: "Shree Optical is hands down the best optical store in the area. The staff is knowledgeable, friendly and very patient. They took their time to understand my requirements and suggested the best options within my budget.",
    text2: "The quality of the glasses is excellent and I am very happy with my purchase. Will definitely be coming back for my next pair!",
  },
];

const starPath = "M13.0494 0.712037C13.3578 -0.237192 14.7008 -0.237191 15.0092 0.712039L17.6147 8.73108C17.7526 9.15559 18.1482 9.443 18.5946 9.443L27.0263 9.443C28.0244 9.443 28.4394 10.7202 27.6319 11.3068L20.8105 16.2629C20.4494 16.5252 20.2983 16.9903 20.4362 17.4148L23.0418 25.4338C23.3502 26.3831 22.2638 27.1724 21.4563 26.5857L14.6349 21.6297C14.2738 21.3673 13.7848 21.3673 13.4237 21.6297L6.6023 26.5857C5.79483 27.1724 4.7084 26.3831 5.01682 25.4338L7.62237 17.4148C7.7603 16.9903 7.6092 16.5252 7.24809 16.2629L0.426684 11.3068C-0.380778 10.7202 0.0342031 9.443 1.03228 9.443L9.464 9.443C9.91035 9.443 10.3059 9.15559 10.4439 8.73108L13.0494 0.712037Z";

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return (
    <div style={{ display: "flex", width: "170px", height: "34px", gap: "4px", alignItems: "center" }}>
      {[...Array(full)].map((_, i) => (
        <svg key={i} width="34" height="34" viewBox="0 0 29 27" fill="#E9C63C" xmlns="http://www.w3.org/2000/svg">
          <path d={starPath} />
        </svg>
      ))}
      {half && (
        <svg width="34" height="34" viewBox="0 0 29 27" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="halfStarGradient">
              <stop offset="50%" stopColor="#E9C63C" />
              <stop offset="50%" stopColor="#E0E0E0" />
            </linearGradient>
          </defs>
          <path d={starPath} fill="url(#halfStarGradient)" />
        </svg>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <svg key={i} width="34" height="34" viewBox="0 0 29 27" fill="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
};

const OurhappyClients = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const progress = scrollTop / (scrollHeight - clientHeight);
    setScrollProgress(progress);
  };

  const getStyle = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) {
      return {
        height: "210px",
        opacity: 1,
        border: "2.5px solid #FF5656",
        boxShadow: "0 8px 30px rgba(255,86,86,0.15)",
        transition: "all 0.4s ease",
      };
    } else if (Math.abs(diff) === 1) {
      return {
        height: "155px",
        opacity: 1,
        border: "2px solid transparent",
        boxShadow: "none",
        transition: "all 0.4s ease",
      };
    } else {
      return {
        height: "120px",
        opacity: 0.45,
        border: "2px solid transparent",
        boxShadow: "none",
        transition: "all 0.4s ease",
      };
    }
  };

  const trackHeight = 472;
  const thumbHeight = trackHeight / testimonials.length;
  const thumbTop = scrollProgress * (trackHeight - thumbHeight);

  return (
    <section
      className="bg-Bg py-16 px-4 md:px-8"
      style={{ borderRadius: "32px" }}
    >
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "48px",
              lineHeight: "72.1px",
              letterSpacing: "0",
              margin: "0 0 16px 0",
            }}
          >
            <span className="text-primary">Our Happy</span>{" "}
            <span className="text-secondary">Clients</span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "26px",
              letterSpacing: "0",
            }}
          >
            Quality eyewear for every style and need. We offer trendy frames, sunglasses, and lenses
            with expert eye care, personalized service, and comfort to help you see clearly.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

          {/* Left: Scrollable Client Images Stack */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: "317px",
              height: "552px",
              backgroundColor: "white",
              borderRadius: "32px",
              padding: "16px 16px 16px 24px",
              boxSizing: "border-box",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            {/* Scroll Track */}
            <div
              className="absolute"
              style={{
                left: "10px",
                top: "40px",
                width: "3px",
                height: `${trackHeight}px`,
                backgroundColor: "#E5E7EB",
                borderRadius: "9999px",
              }}
            />

            {/* Scroll Thumb */}
            <div
              className="absolute"
              style={{
                left: "10px",
                top: `${40 + thumbTop}px`,
                width: "3px",
                height: `${thumbHeight}px`,
                backgroundColor: "#FF5656",
                borderRadius: "9999px",
                transition: "top 0.2s ease",
              }}
            />

            {/* Scrollable images */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              style={{
                marginLeft: "16px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingRight: "4px",
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  onClick={() => setActiveIndex(index)}
                  className="relative cursor-pointer flex-shrink-0"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    ...getStyle(index),
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {index === activeIndex && (
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        top: "14px",
                        right: "14px",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "#F97316",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 29 27" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d={starPath} />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div
            className="relative bg-white overflow-hidden flex-shrink-0"
            style={{
              width: "710px",
              height: "552px",
              borderRadius: "48px",
              padding: "56px",
              boxSizing: "border-box",
              boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
            }}
          >
            {/* Background Quote Mark */}
            <div
              className="absolute select-none pointer-events-none"
              style={{
                top: "-40px",
                right: "16px",
                fontSize: "240px",
                fontWeight: "bold",
                color: "#F3F4F6",
                opacity: 0.3,
                lineHeight: 1,
              }}
            >
              "
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    letterSpacing: "0",
                    color: "#4A4A4A",
                    margin: "0 0 36px 0",
                    transition: "all 0.4s ease",
                  }}
                >
                  {testimonials[activeIndex].text1}
                </p>
                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    letterSpacing: "0",
                    color: "#4A4A4A",
                    margin: 0,
                    transition: "all 0.4s ease",
                  }}
                >
                  {testimonials[activeIndex].text2}
                </p>
              </div>

              {/* Bottom: Name + Stars + Dotted line below */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    paddingBottom: "8px",
                  }}
                >
                  <div style={{ height: "72px" }}>
                    <h4
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontSize: "24px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                        letterSpacing: "0",
                        color: "#FF5656",
                        margin: "0 0 2px 0",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {testimonials[activeIndex].name}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "27px",
                        letterSpacing: "0",
                        color: "#6B7280",
                        margin: 0,
                      }}
                    >
                      {testimonials[activeIndex].role}
                    </p>
                  </div>

                  <StarRating rating={testimonials[activeIndex].rating} />
                </div>

                {/* Dotted line only */}
                <div
                  style={{
                    width: "250px",
                    borderBottom: "2px dashed #D9D9D9",
                  }}
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurhappyClients;