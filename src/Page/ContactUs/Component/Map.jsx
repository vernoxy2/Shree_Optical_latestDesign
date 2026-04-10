import React from "react";

const Map = () => {
  return (
    <section className="w-full h-[450px] md:h-[600px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8490235484223!2d72.93863877501894!3d20.594222280948642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3e59a68829f%3A0x9ef062442028e5b6!2sShree%20Optical!5e0!3m2!1sen!2sin!4v1775815986119!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shree Optical Location"
      ></iframe>
    </section>
  );
};

export default Map;
