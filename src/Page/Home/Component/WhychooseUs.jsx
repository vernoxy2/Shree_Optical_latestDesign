import React from "react";

const whyChooseUsData = [
  {
    id: 1,
    title: "State-of-the-art Testing",
    description: "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.1)"/>
        <path d="M14 24C14 20.6863 16.6863 18 20 18H28C31.3137 18 34 20.6863 34 24V24C34 27.3137 31.3137 30 28 30H20C16.6863 30 14 27.3137 14 24V24Z" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="24" r="3" stroke="white" strokeWidth="2"/>
        <circle cx="28" cy="24" r="3" stroke="white" strokeWidth="2"/>
        <path d="M23 24H25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Curated Eyewear Brands",
    description: "Stylish, high-quality eyewear from thoughtfully selected premium brands.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.1)"/>
        <path d="M24 28C27.3137 28 30 25.3137 30 22C30 18.6863 27.3137 16 24 16C20.6863 16 18 18.6863 18 22C18 25.3137 20.6863 28 24 28Z" stroke="white" strokeWidth="2"/>
        <path d="M16 34C16 30.6863 18.6863 28 22 28H26C29.3137 28 32 30.6863 32 34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "State-of-the-art Testing",
    description: "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.1)"/>
        <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="2"/>
        <circle cx="24" cy="24" r="3" fill="white"/>
        <path d="M24 12V14M24 34V36M12 24H14M34 24H36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "State-of-the-art Testing",
    description: "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.1)"/>
        <path d="M24 32L21 35L17 31M31 17L24 13L17 17V24C17 28.5 21 32 24 33C27 32 31 28.5 31 24V17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "State-of-the-art Testing",
    description: "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.1)"/>
        <path d="M14 24C14 20.6863 16.6863 18 20 18H28C31.3137 18 34 20.6863 34 24V24C34 27.3137 31.3137 30 28 30H20C16.6863 30 14 27.3137 14 24V24Z" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="24" r="3" stroke="white" strokeWidth="2"/>
        <circle cx="28" cy="24" r="3" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "State-of-the-art Testing",
    description: "Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.1)"/>
        <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="2"/>
        <circle cx="24" cy="24" r="3" fill="white"/>
        <path d="M24 12V14M24 34V36M12 24H14M34 24H36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const WhychooseUs = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "#1a1a1a",
        backgroundImage: "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1440&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left side — Title + Description */}
          <div className="lg:w-1/4 flex flex-col justify-center">
            <h2
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Why Choose Us?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Experience the difference with our commitment to vision, style, and genuine care trusted by thousands of happy customers.
            </p>
            <div
              className="w-16 h-1 rounded-full"
              style={{ backgroundColor: "#FF5656" }}
            />
          </div>

          {/* Right side — Cards Grid */}
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUsData.map((feature) => (
              <div
                key={feature.id}
                className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3
                    className="text-white font-bold text-lg leading-snug"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhychooseUs;